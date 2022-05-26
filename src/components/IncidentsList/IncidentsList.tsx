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

function createData(plate: string, involved: string, how: string) {
  return {
    plate,
    involved,
    how,
  };
}

const rows = [
  createData(
    "XBK-4952",
    "4",
    "No Km 125 da Av. Ermelizo Fernandes o carro que estava na minha frente "
  ),
  createData(
    "XBK-4952",
    "4",
    "No Km 125 da Av. Ermelizo Fernandes o carro que estava na minha frente "
  ),
  createData(
    "XBK-4952",
    "4",
    "No Km 125 da Av. Ermelizo Fernandes o carro que estava na minha frente "
  ),
];

const headCells = [
  {
    id: "plate",
    label: "Placa do Carro",
  },
  {
    id: "involved",
    label: "Envolvidos",
  },
  {
    id: "how",
    label: "Como aconteceu",
  },
];

export default function IncidentsList() {
  return (
    <TableContainer>
      <Table>
        <TableHead
          sx={{
            backgroundColor: "#dcdf21",
            borderRadius: "16px",
          }}
        >
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                sx={{
                  color: "#1a1a1a",
                }}
              >
                {headCell.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.plate}>
              <TableCell>{row.plate}</TableCell>
              <TableCell>
                <Chip label={row.involved} />
              </TableCell>
              <TableCell>
                <Box alignItems="center" display="flex">
                  {row.how}
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
