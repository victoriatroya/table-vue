<template>
  <div class="table" v-if="users.length">
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
    deleteRow: Function,
  },
  methods: {
    redirectTodos(id) {
      this.$router.push({path: `/dashboard/users/${id}/todos`})
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
      width: auto;
    }

    input {
      width: 100px;
      margin: 10px;
    }
  }

  .body {
    font-size: 14px;

    .item {
      display: grid;
      grid-template-columns: 80px repeat(6, auto) 80px;
      align-items: center;
      text-align: center;

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
        width: 125px;
        text-overflow: ellipsis;
        white-space: initial;
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
  }
}

@media (min-width: 1024px) {

}
</style>
