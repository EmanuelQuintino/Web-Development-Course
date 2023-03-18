import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {API} from '../../config/api';

export function FormUpdate({modalClose, studentData, fetchStudents}) { 
    
    let birthSplit = studentData.birth;
    if (String(studentData.birth).includes('T')) {
        birthSplit = String(studentData.birth).split('T')[0];
    }

    const [studentDataForm, setStudentDataForm] = useState({
        id: studentData.id,
        name: studentData.name,
        email: studentData.email,
        cpf: studentData.cpf,
        birth: birthSplit,
        phone: studentData.phone,
        gender: studentData.gender,
        cep: studentData.cep,
        number: studentData.number,
        street: studentData.street,
        district: studentData.district,
        city: studentData.city,
        state: studentData.state,
        uf: studentData.uf,
    });

    console.log(studentDataForm);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        updateStudent();
    };

    function updateStudent() {
        API.put(`/students/${studentData.id}`, studentDataForm)
            .then((res) => {
                alert(res.data);
                fetchStudents();
                modalClose();
            })    
            .catch((error) => alert(error.response.data));
    }

    function deleteStudent() {
        const isDelete = confirm("Deseja excluir o aluno?");
        if (isDelete) {
            API.delete(`/students/${studentData.id}`)
                .then((res) => {
                        alert(res.data);
                        fetchStudents();
                        modalClose();
                    })    
                    .catch((error) => alert(error.response.data));
        }
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setStudentDataForm({
            ...studentDataForm,
            [name]: value
        });
    }

  return (
    <Form onSubmit={handleSubmit} className="form-modal">
        <Form.Group className="mb-3 w-25" controlId="id">
            <Form.Label>ID</Form.Label>
            <Form.Control
                type="text"
                placeholder="ID do Aluno"
                name="id"
                value={studentDataForm.id}
                disabled
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nome</Form.Label>
            <Form.Control
                type="text"
                placeholder="Nome do aluno"
                autoFocus
                name="name"
                value={studentDataForm.name}
                onChange={handleInputChange}
                required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email"
                placeholder="nome@exemplo.com"
                name="email"
                value={studentDataForm.email}
                onChange={handleInputChange}
                required
                />
        </Form.Group>

        <div className="d-flex justify-content-between">
            <Form.Group className="mb-3 w-45" controlId="cpf">
                <Form.Label>CPF</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="123.123.123-12"
                    name="cpf"
                    value={studentDataForm.cpf}
                    onChange={handleInputChange}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3 w-50" controlId="birth">
                <Form.Label>Nascimento</Form.Label>
                <Form.Control
                    type="date"
                    name="birth"
                    value={studentDataForm.birth}
                    onChange={handleInputChange}
                    required
                    />
            </Form.Group>
        </div>

        <div className="d-flex justify-content-between">
            <Form.Group className="mb-3 w-40" controlId="phone">
                <Form.Label>Celular</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="(00) 00000-0000 "
                    name="phone"
                    value={studentDataForm.phone}
                    onChange={handleInputChange}
                    required
                    />
            </Form.Group>
            <Form.Group className="mb-3 w-50" controlId="gender">
                <Form.Label>Gênero</Form.Label>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3" id="radio">
                        <Form.Check
                            inline
                            label="M"
                            name="gender"
                            type={type}
                            id={`inline-${type}-1`}
                            onChange={handleInputChange}
                            value={"M"}
                            required
                            checked={studentData.gender === 'M'}
                        />
                        <Form.Check
                            inline
                            label="F"
                            name="gender"
                            type={type}
                            id={`inline-${type}-2`}
                            onChange={handleInputChange}
                            value={"F"}
                            required
                            checked={studentData.gender === 'F'}
                        />
                        <Form.Check
                            inline
                            label="Outro"
                            name="gender"
                            type={type}
                            id={`inline-${type}-3`}
                            value={"Outro"}
                            onChange={handleInputChange}
                            required
                            checked={studentData.gender === 'Outro'}
                        />
                    </div>
                ))}
            </Form.Group>
        </div>

        <div className="d-flex justify-content-between">
            <Form.Group className="mb-3 w-50" controlId="cep">
                <Form.Label>CEP</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="00000-000"
                    name="cep"
                    value={studentDataForm.cep}
                    onChange={handleInputChange}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3 w-40" controlId="number">
                <Form.Label>Número</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="123A"
                    name="number"
                    value={studentDataForm.number}
                    onChange={handleInputChange}
                    required
                />
            </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="street">
            <Form.Label>Rua</Form.Label>
            <Form.Control 
                type="text"
                placeholder="Ex: Rua, Avenida, Travessa"
                name="street"
                value={studentDataForm.street}
                onChange={handleInputChange}
                required
            />
        </Form.Group>

        <div className="d-flex justify-content-between">
            <Form.Group className="mb-3 w-50" controlId="district">
                <Form.Label>Bairro</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder=""
                    name="district"
                    value={studentDataForm.district}
                    onChange={handleInputChange}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3 w-40" controlId="city">
                <Form.Label>Cidade</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder=""
                    name="city"
                    value={studentDataForm.city}
                    onChange={handleInputChange}
                    required
                />
            </Form.Group>
        </div>
        
        <div className="d-flex justify-content-between">
            <Form.Group className="mb-3 w-50" controlId="state">
                <Form.Label>Estado</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder=""
                    name="state"
                    value={studentDataForm.state}
                    onChange={handleInputChange}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3 w-40" controlId="uf">
                <Form.Label>UF</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="CE"
                    name="uf"
                    value={studentDataForm.uf}
                    onChange={handleInputChange}
                    required
                />
            </Form.Group>
        </div>
        <Modal.Footer>
            <Button variant="danger" onClick={() => deleteStudent(studentData.id)}>
                Deletar
            </Button>
            <Button variant="primary" type="submit">
                Atualizar
            </Button>
        </Modal.Footer>
    </Form>
  );
}