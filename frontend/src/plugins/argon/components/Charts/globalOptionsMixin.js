import Chart from 'chart.js';
import { initGlobalOptions } from "@/plugins/argon/components/Charts/config";
export default {
  mounted() {
    initGlobalOptions(Chart);
  }
}
