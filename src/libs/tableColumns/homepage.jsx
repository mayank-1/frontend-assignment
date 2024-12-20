// UTILS
import { getCurrencyFormat } from "../../utils/stringUtils";

export const getHomPageTableColumns = () => [
  { header: "S.No.", key: "s.no" },
  {
    header: "Percentage funded",
    key: "percentage.funded",
    render: (value) => <>{value}%</>,
  },
  {
    header: "Amount pledged",
    key: "amt.pledged",
    render: (value) => getCurrencyFormat(value),
  },
];
