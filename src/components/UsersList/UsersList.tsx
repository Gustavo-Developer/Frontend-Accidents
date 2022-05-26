import {
  Box,
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

function createData(
  name: string,
  cpf: string,
  birthday: string,
  adress: string,
  city: string
) {
  return {
    name,
    cpf,
    birthday,
    adress,
    city,
  };
}

const rows = [
  createData(
    "Gustavo Mendes ",
    "054.562.587-42",
    "07/07/2002",
    "Rua Numero 0, 125",
    "São paulo"
  ),
  createData(
    "Gustavo Mendes ",
    "054.562.587-42",
    "07/07/2002",
    "Rua Numero 0, 125",
    "São paulo"
  ),
  createData(
    "Gustavo Mendes ",
    "054.562.587-42",
    "07/07/2002",
    "Rua Numero 0, 125",
    "São paulo"
  ),
  createData(
    "Gustavo Mendes ",
    "054.562.587-42",
    "07/07/2002",
    "Rua Numero 0, 125",
    "São paulo"
  ),
];

const headCells = [
  {
    id: "name",
    label: "Nome",
  },
  {
    id: "cpf",
    label: "CPF",
  },
  {
    id: "birthday",
    label: "Nascimento",
  },
  {
    id: "adress",
    label: "Endereço",
  },
  {
    id: "city",
    label: "Cidade",
  },
  {
    id: "edit",
    label: "Editar",
  },
];

export default function UsersList() {
  return (
    <TableContainer>
      <Table>
        <TableHead
          sx={{
            backgroundColor: "#2E3191",
            borderRadius: "16px",
          }}
        >
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                sx={{
                  color: "#fff",
                }}
              >
                {headCell.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <Button>
                  <Chip label={row.cpf} />
                </Button>
              </TableCell>
              <TableCell>
                <Chip label={row.birthday} />
              </TableCell>
              <TableCell>
                <Chip label={row.adress} />
              </TableCell>
              <TableCell>
                <Chip label={row.city} />
              </TableCell>
              <TableCell>
                <Box alignItems="center" display="flex">
                  <AddIcon color="primary" />
                  Editar
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
