<template>
  <default-layout>
    <table class="list-bills-table">
      <tr>
        <th>Date</th>
        <th>Title</th>
        <th>Description</th>
        <th>No of Recipients</th>
        <th>Action</th>
      </tr>
      <tr v-for="(bill, index) in fetchedBills" :key="index">
        <td>{{new Date(bill.created_at).toLocaleDateString('en-GB', options)}}</td>
        <td>{{bill.title}}</td>
        <td>{{bill.description}}</td>
        <td>{{bill.bill_recipients.length}}</td>
        <td><button class="list-bills-btn">View details</button></td>
      </tr>
    </table>
    <spinner
    v-if="isListBillsPageLoading"
    >

    </spinner>
  </default-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import defaultLayout from '@/components/layout/defaultLayout.vue';
import Spinner from '@/components/ui/Spinner.vue';

export default {
  components: {
    'default-layout': defaultLayout,
    Spinner,
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem('user'));
    const userAccountID = user.user_account_id;
    this.fetchBills(userAccountID);
  },
  data() {
    return {
      options: { day: 'numeric', month: 'long', year: 'numeric' },
    };
  },
  computed: {
    ...mapState({
      isListBillsPageLoading: state => state.bills.isListBillsPageLoading,
      fetchedBills: state => state.bills.listedBills,
    }),
  },
  watch: {
    bills() {
      console.log('section changed');
    },
  },
  methods: {
    ...mapActions({
      fetchBills: 'handleBillListing',
    }),
  },
};
</script>

<style scoped>
.list-bills-table {
  box-shadow: 0 1.5rem 4rem rgba(204, 204, 204, 0.5);
  width: 90%;
  margin: 130px auto;
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
