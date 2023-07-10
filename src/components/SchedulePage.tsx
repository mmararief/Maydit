import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/Table";

async function getSchedule() {
  const res = await fetch("https://1ka28.000webhostapp.com/jadwalmatkul.php");
  return res.json();
}

const SchedulePage = async () => {
  const schedule = await getSchedule();

  return (
    <Table>
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Class Code</TableHead>
          <TableHead>Day</TableHead>
          <TableHead>Course</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Instructor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {schedule.map((item: any, index: any) => (
          <TableRow
            key={index}
            className={index % 2 === 0 ? "bg-gray-100" : ""}
          >
            <TableCell>{item[0]}</TableCell>
            <TableCell>{item[1]}</TableCell>
            <TableCell>{item[2]}</TableCell>
            <TableCell>{item[3]}</TableCell>
            <TableCell>{item[4]}</TableCell>
            <TableCell>{item[5]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SchedulePage;
