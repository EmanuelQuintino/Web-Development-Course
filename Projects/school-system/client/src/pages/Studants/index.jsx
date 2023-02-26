import Table from 'react-bootstrap/Table';

export function Studants() {
  const studants = [
    {id: 1, name: 'Emanuel Quintino', age: 30, email: 'emanuelquintino@hotmail.com'},
    {id: 2, name: 'Emanuel Quintino', age: 30, email: 'emanuelquintino@hotmail.com'}
  ];
  
  return (
    <div className="container">
      <h1>Alunos</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Email</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {
            studants.map((studant) => {
              return (
                <tr key={studant.id}>
                    <td>{studant.id}</td>
                    <td>{studant.name}</td>
                    <td>{studant.age}</td>
                    <td>{studant.email}</td>
                    <td>Editar Excluir</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  );
}