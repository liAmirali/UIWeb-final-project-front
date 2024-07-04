<template>
  <div class="w-[400px] rounded-3xl border bg-neutral-50 overflow-hidden">
    <div class="flex h-16 items-center justify-center relative">
      <div class="flex absolute left-3" @click="onBackButtonClick">
        <back-button />
      </div>
      <p class="text-xl font-semibold">Add People</p>
    </div>
    <div class="px-3 mb-5">
      <app-input
        @update-input="handleSearchInputChange"
        name="search-people"
        placeholder="Search people"
        :style="'thin'"
      ></app-input>
    </div>
    <div class="max-h-96 overflow-auto space-y-3 px-3">
      <people-item
        v-for="person in filteredPeople"
        :key="person.id"
        :name="person.username"
        :email="person.email"
        :checked="checkedUsers.includes(person.id)"
        @checkbox-change="handleCheckBoxChange(person.id)"
        pictureUrl="/Avatar.png"
      ></people-item>
    </div>
    <div class="flex justify-between p-3 bg-white items-center">
      <div class="flex">
        <img class="rounded-full size-8 border" src="/Avatar.png" alt="" />
        <img
          class="rounded-full size-8 border -ml-2"
          src="/Avatar.png"
          alt=""
        />
        <img
          class="rounded-full size-8 border -ml-2"
          src="/Avatar.png"
          alt=""
        />
      </div>
      <app-button @click="handleSubmitClick">Continue</app-button>
    </div>
  </div>
</template>

<script>
import BackButton from "@/components/common/buttons/BackButton.vue";
import PeopleItem from "./PeopleItem.vue";
import AppInput from "@/components/common/inputs/AppInput.vue";
import AppButton from "@/components/common/buttons/AppButton.vue";
import { fetcher } from "@/config/api";

export default {
  components: { BackButton, PeopleItem, AppInput, AppButton },
  emits: ["backClick"],
  props: {
    objectKey: {
      type: String,
      required: true,
    },
  },
  data() {
    return { people: [], checkedUsers: [], searchValue: "" };
  },
  methods: {
    onBackButtonClick() {
      console.log("HERE");
      this.$emit("backClick");
    },
    fetchUsers() {
      fetcher
        .get("/objects/people/", {
          params: {
            object_key: this.objectKey,
          },
        })
        .then((res) => {
          this.people = res.data
            .filter((u) => !u.is_owner)
            .sort((a, b) =>
              a.has_access && b.has_access ? 0 : a.has_access ? -1 : 1
            );
          this.people.forEach((user) => {
            if (user.has_access) this.checkedUsers.push(user.id);
          });
        })
        .catch(() => {});
    },
    handleCheckBoxChange(personId) {
      const index = this.checkedUsers.indexOf(personId);
      if (index === -1) {
        this.checkedUsers.push(personId);
      } else {
        this.checkedUsers.splice(index, 1);
      }
    },
    handleSubmitClick() {
      fetcher
        .put("/objects/access/", {
          object_key: this.objectKey,
          shared_with: this.checkedUsers,
        })
        .then(() => {
          this.$emit("backClick");
        })
        .catch(() => {
          alert("An error occurred.");
        });
    },
    handleSearchInputChange(value) {
      this.searchValue = value;
    },
  },
  computed: {
    filteredPeople() {
      if (this.searchValue === "") return this.people;
      else {
        return this.people.filter(
          (person) =>
            person.email.includes(this.searchValue) ||
            person.username.includes(this.searchValue)
        );
      }
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style></style>
