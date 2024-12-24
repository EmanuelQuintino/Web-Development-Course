// enum

enum Status {
  Check = "Concluído",
  Pending = "Pendente",
  Cancel = "Cancelado",
}

const orderStatus = {
  Check: "Concluído",
  Pending: "Pendente",
  Cancel: "Cancelado",
} as const;

// Status.Check = "a";
// orderStatus.Check = "a";

console.log(Status.Check);
console.log(orderStatus.Check);

enum Sector {
  Sales = 1,
  RH = 2,
  TI = 3,
}

const sector = {
  Sales: 1,
  RH: 2,
  TI: 3,
} as const;

console.log(Sector.TI);
console.log(sector.TI);
