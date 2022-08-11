<template>
  <div class="todo-details">
    <p class="title">Information User #<span>{{ id }}</span></p>
    <div class="table" v-if="data.length">
      <div class="header">
        <p class="text">Id</p>
        <p class="text">Title</p>
        <p class="text">Todo Completed</p>
      </div>
      <div>
        <div class="body" v-for="{title, id, completed} in data" :key="id">
          <p class="text">{{ id }}</p>
          <p class="text">{{ title }}</p>
          <p class="text" v-if="completed">Yes</p>
          <p class="text" v-if="!completed">No</p>
        </div>
      </div>
    </div>
    <p v-if="!data.length" class="message">El usuario #{{ id }} aun no tiene información</p>
    <button class="go-back" @click="goToDashboard()">Go Back</button>
  </div>
</template>

<script>
 export default  {
   data() {
     return {
       data: [],
       id: this.$route.params.id,
     }
   },
   created() {
      this.getTodoInformation()
   },
   methods: {
     goToDashboard() {
       this.$router.push({ name: 'dashboard'})
     },
     async getTodoInformation() {
       this.data  = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${this.id}`).then(r => r.json());
     }
   },
 }
</script>

<style lang="scss" scoped>
  .todo-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      color: #0c0c0c;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
    }

    .message {
      font-size: 20px;
      font-weight: bold;
    }

    .table {
      border: 1px solid #121b56;
      border-radius: 10px;

      .header {
        display: grid;
        grid-template-columns: auto 380px auto;
        justify-content: space-between;
        border-bottom: 1px solid #121b56;
        background-color: #dddde7;
        border-radius: 10px 10px 0 0;

        .text {
          font-weight: bold;
        }
      }

      .body {
        display: grid;
        grid-template-columns: 50px 260px 100px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #121b56;
      }

      .body:last-child {
        border-bottom: none;
      }
    }

    .text {
      text-align: center;
      font-size: 14px;
      margin: 0;
      padding: 10px;
    }

    .go-back {
      display: flex;
      margin: 15px auto;
      font-size: 15px;
      font-weight: 600;
      color: #121b56;
      width: 120px;
      border: 1px solid #121b56;
      border-radius: 12px;
      background-color: transparent;
      padding: 10px 25px;
      cursor: pointer;
    }
}

</style>