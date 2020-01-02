 <template>
  <default-layout
  @sidebarClicked="handleSectionSelected"
  >
    <component :is="sectionSelected">
    </component>
 </default-layout>
</template>

<script>
import defaultLayout from '@/components/layout/defaultLayout.vue';
import Spinner from '@/components/ui/Spinner.vue';
import CreateBillSection from '@/components/pages/CreateBills.vue';
import ListBillsSection from '@/components/pages/ListBills.vue';

export default {
  data() {
    return {
      sectionSelected: 'create-bill-section',
    };
  },
  components: {
    'default-layout': defaultLayout,
    'create-bill-section': CreateBillSection,
    'list-bills-section': ListBillsSection,
  },
  methods: {
    handleSectionSelected(value) {
      console.log('mehhh');
      this.sectionSelected = value;
    },
  },
};
</script>

<style scoped>

</style>
