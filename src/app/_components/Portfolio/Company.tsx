import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const Company = () => {
  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
    },
  ];

  const columns = [
    {
      key: "Company",
      label: "Company",
    },
    {
      key: "Region",
      label: "Region",
    },
    {
      key: "Industry",
      label: "Industry",
    },
    {
      key: "Valuation",
      label: "Valuation",
    },
    {
      key: "Industry",
      label: "Industry",
    },
    {
      key: "Investment Date",
      label: "Investment Date",
    },
  ];
  return (
    <>
      <div className="h-full w-full pr-7">
        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Company;
