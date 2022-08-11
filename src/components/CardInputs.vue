<template>
  <div class="card-inputs">
    <div class="header">
      <p>Id</p>
      <p>Name</p>
      <p>Username</p>
      <p>Email</p>
      <p>Address</p>
      <p>Company</p>
    </div>
    <div >
      <div class="body">
        <input type="number" class="new-input" v-model="newRow.id">
        <input type="text" class="new-input" v-model="newRow.name">
        <input type="email" class="new-input" v-model="newRow.username">
        <input type="text" class="new-input" v-model="newRow.email">
        <input type="text" class="new-input" v-model="newRow.address.street">
        <input type="text" class="new-input" v-model="newRow.company.name">
      </div>
    </div>
    <div class="card-footer">
      <button class="create-user" @click="cancelButton()">Cancel</button>
      <button class="create-user" @click="addNewUser">Create new user</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return  {
      newRow: {
        name: null,
        username: null,
        email: '',
        address: {
          street: '',
        },
        company: {
          name: '',
        },
        id: '',
      },
    }
  },
  props: {
    showNewCard: Boolean,
    cancelButton: Function,
  },
  methods: {
    addNewUser() {
      const { name, address, company, id, email, username } = this.newRow;
      if(name && address && company && id && email && username) {
        this.$emit('addNewData', this.newRow);
      }
    },
  }
}
</script>

<style lang="scss">
.card-inputs {
  background-color: #ffffff;
  margin-bottom: 15px;
  padding: 14px 10px;

  .header {
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    padding: 0 10px;
    text-align: center;
  }

  .body {
    display: grid;
    grid-template-columns: repeat(6, auto);

    .new-input {
      outline: none;
      padding: 8px;
      border: 1px solid #121b56;
    }

    .new-input {
      border-left: none;
    }

    .new-input:first-child {
      border-left: 1px solid #121b56;
    }
  }

  .card-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin: 15px 0;

    .create-user {
      background-color: #0054FE;
      border-radius: 5px;
      color: #ffffff;
      border: none;
      width: 120px;
      height: 35px;
    }
  }
}
</style>