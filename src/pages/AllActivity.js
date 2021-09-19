import Activitylist from "../components/activity/Activitylist";
//import FilterList from "../components/activity/Filterlist";

const DUMMY_DATA = [
  {
    id: "a1",
    title: "Tennis @ Midtown Athletic Club",
    image:
      "https://www.midtown.com/sites/default/files/MON_Tennis_Image%20page%20block700x500px.jpg",
    address: "6105 Av. du Boisé, Montréal, QC H3S 2V9",
    description: "Come meet new people and play tennis!",
  },
  {
    id: "a1",
    title: "Tennis @ Midtown Athletic Club",
    image:
      "https://www.midtown.com/sites/default/files/MON_Tennis_Image%20page%20block700x500px.jpg",
    address: "6105 Av. du Boisé, Montréal, QC H3S 2V9",
    description: "Come meet new people and play tennis!",
  },
  {
    id: "a1",
    title: "Tennis @ Midtown Athletic Club",
    image:
      "https://www.midtown.com/sites/default/files/MON_Tennis_Image%20page%20block700x500px.jpg",
    address: "6105 Av. du Boisé, Montréal, QC H3S 2V9",
    description: "Come meet new people and play tennis!",
  },
  {
    id: "a1",
    title: "Tennis @ Midtown Athletic Club",
    image:
      "https://www.midtown.com/sites/default/files/MON_Tennis_Image%20page%20block700x500px.jpg",
    address: "6105 Av. du Boisé, Montréal, QC H3S 2V9",
    description: "Come meet new people and play tennis!",
  },
];
function ActivityPage() {
  return (
    <div>
      <h1>Activities</h1>
      <Activitylist activities={DUMMY_DATA} />
    </div>
  );
}

export default ActivityPage;
