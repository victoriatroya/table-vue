<template>
  <div class="table">
    <div class="header">
      <p/>
      <p>Name</p>
      <p>Username</p>
      <p>Email</p>
      <p>Address</p>
      <p>Company</p>
      <p>Options</p>
      <p/>
    </div>
    <div class="body">
      <div v-for="{name, username, email, address, company, id} in users" :key="id" class="item">
        <input
            :value="id"
            type="checkbox"
            class="checkbox"
        >
        <p>{{ name }}</p>
        <p>{{ username }}</p>
        <p>{{ email }}</p>
        <p>{{ address.street }}, <span class="span">{{ address.city }}</span></p>
        <p>{{ company.name }}</p>
        <span class="redirect-todos" @click="redirectTodos(id)">View todos</span>
        <img
            src="../assets/images/trash-solid.svg"
            alt="trash"
            class="trash-icon"
            @click="deleteRow(id)"
        >
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    users: {
      type: Array,
      default: []
    },
  },
  methods: {
    redirectTodos(id) {
      this.$router.push({path: `/users/${id}/todos`})
    },
    deleteRow(id) {
      this.users = this.users.filter((item) => item.id !== id);
    },
  },
}
</script>
<style lang="scss" scoped>
.table {
  .header {
    font-size: 14px;
    color: #9B9EAC;
    display: grid;
    grid-template-columns: 80px repeat(6, auto) 80px;

    p {
      text-align: center;
      margin: 10px;
      padding: 10px;
    }

    input {
      width: 100px;
      margin: 10px;
    }
  }

  .body {
    font-size: 14px;

    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      padding: 0 10px;

      .checkbox {
        cursor: pointer;
      }

      .span {
        display: block;
      }

      .trash-icon {
        cursor: pointer;
        width: 15px;
      }

      p {
        width: 110px;
      }

      .redirect-todos {
        color: blue;
        text-decoration: underline;
        cursor: pointer;
      }

    }
  }

  .item:nth-child(odd) {
    background-color: #F5F6FA;
    padding: 0 10px;
  }
}

@media (min-width: 1024px) {

}
</style>
