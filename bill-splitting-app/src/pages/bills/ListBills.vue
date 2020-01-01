<template>
  <div class="overall">
    <table class="list-bills-table">
      <tr>
        <th>Date</th>
        <th>Title</th>
        <th>Description</th>
        <th>Number of bill recipients</th>
        <th>Action</th>
      </tr>
      <tr>
        <td>26th Jan, 2020</td>
        <td>Hangout at Vesicash</td>
        <td>Too long to be bothered</td>
        <td>3</td>
        <td><button class="list-bills-btn">View details</button></td>
      </tr>
    </table>
  </div>
</template>

<script>


export default {
};
</script>


<style scoped>
.list-bills-table {
  box-shadow: 0 1.5rem 4rem rgba(204, 204, 204, 0.5);
  width: 70%;
  margin: 120px auto;
  border-collapse: collapse;
  border-radius: 5px;
  text-align: center;
  font-weight: 100;
}
.list-bills-table th {
  text-transform: uppercase;
  font-weight: 100;
}
td {
  border: 1px solid #ccc;
  padding: 15px 20px;
  border-left: none;
  border-bottom: none;
  font-weight: 100;
}
tr:hover {
  transition: all 0.3s;
  box-shadow: 0 1.5rem 4rem rgba(204, 204, 204, 0.5);
  transform: translateX(5px);
  border-top: none;
}
tr:hover > td, tr:hover > th {
  border-top: none;
  border-bottom: none;
}
th:last-child {
  border-right: none;
}
td:last-child {
  border-right: none;
}
th {
  border: 1px solid #ccc;
  border-top: none;
  border-left: none;
  padding: 20px 20px;
}
.list-bills-btn{
  border: 1px solid rgba(30, 139, 195, 1);
  padding: 10px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  color:rgba(30, 139, 195, 1);
  cursor: pointer;
  outline: none;
}
</style>
