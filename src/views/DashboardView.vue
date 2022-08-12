<template>
  <div class="dashboard-wrapper">
    <div class="dashboard-wrapper__left">
      <p class="title">System</p>
      <div class="users">
        <img src="../assets/images/users.svg" alt="users">
        <p>Users</p>
      </div>
    </div>
    <div class="dashboard-wrapper__right">
      <nav class="navbar">
        <div class="dashboard">
          <img src="../assets/images/menu-left.svg" alt="menu">
          <p>Dashboard</p>
        </div>
        <div class="user">
          <img src="../assets/images/catherine-frot.svg" alt="catherine">
          <p>Marlene Sasoeur</p>
        </div>
      </nav>
      <div class="add-new">
        <button class="button" @click="handleShowCard"><span>+</span> Add new user</button>
      </div>
      <div v-if="showNewCard">
        <CardInputs
            :show-new-card="showNewCard"
            :cancel-button="cancelButton"
            @add-new-data="onNewRow"
        />
      </div>
      <div class="table-content">
        <div class="top">
          <p class="text">Users</p>
          <img src="../assets/images/menu-dots.svg" alt="catherine">
        </div>
        <TheTable
            :users="users"
            :delete-row="deleteRow"
        />
        <p v-if="!users.length" class="message">No existen usuarios por el momento</p>
      </div>
    </div>
  </div>
</template>

<script>
import TheTable from "../components/TheTable.vue"
import CardInputs from "../components/CardInputs.vue"

export default {
  components: {
    TheTable,
    CardInputs,
  },
  data() {
    return {
      users: [],
      todoCheck: [],
      showNewCard: false,
    }
  },
  created() {
    this.getUsersData()
  },
  methods: {
    async getUsersData() {
      try {
        this.users = await fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json());
      } catch (error) {
        console.log(error);
      }
    },
    handleShowCard() {
      this.showNewCard = true;
    },
    cancelButton() {
      this.showNewCard = false;
    },
    onNewRow(row) {
      this.users.push(row);
      this.showNewCard = false;
    },
    deleteRow(id) {
      return this.users = this.users.filter((item) => item.id !== id);
    },
  }
}
</script>
<style lang="scss" scoped>
.dashboard-wrapper {
  background-color: #F5F6FA;
  height: 100vh;
  display: flex;

  &__left {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    width: 230px;
    padding: 20px 30px;
    height: auto;

    .title {
      font-size: 14px;
    }

    .users {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 15px;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  &__right {
    width: 100%;
    margin: 0 25px;

    .navbar {
      display: flex;
      justify-content: space-between;
      padding: 15px;
      background-color: #ffffff;

      .dashboard, .user {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }

      .user img {
        height: 30px;
        border-radius: 50%;
      }
    }

    .add-new .button {
      color: #ffffff;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 25px;
      width: 175px;
      height: 48px;
      border-radius: 8px;
      margin: 20px 0;
      border: none;
      background-color: #0054FE;
      padding: 20px;
      cursor: pointer;

      span {
        font-size: 24px;
      }
    }

    .table-content {
      background-color: #ffffff;
      padding: 20px;

      .top {
        display: flex;
        justify-content: space-between;

        .text {
          margin: 0;
          font-size: 14px;
          font-weight: bold;
        }
      }

      .message {
        color: #0054FE;
        font-size: 20px;
        text-align: center;
      }
    }
  }
}
</style>
