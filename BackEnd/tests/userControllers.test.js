require('dotenv').config();

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/index');
const User = require('../src/models/User');
const Company = require('../src/models/Company');

let companyId;

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const company = new Company({
    name: 'Company A',
    legalDocument: '12345678',
    email: 'companya@example.com',
    password: 'password123',
  });
  const savedCompany = await company.save();
  companyId = savedCompany._id;
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Controladores de Usuario', () => {
  let userId;

  test('debería crear un nuevo usuario', async () => {
    const response = await request(app)
      .post('/api/companies/${companyId}/users')
      .send({
        name: 'User A',
        document: '87654321',
        email: 'usera@example.com',
        password: 'password123',
        role: 'empleado',
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    userId = response.body._id;
  });

  test('debería obtener todos los usuarios', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('debería obtener un usuario por ID', async () => {
    const response = await request(app).get(`/api/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id', userId);
  });

  test('debería actualizar un usuario', async () => {
    const response = await request(app)
      .put(`/api/users/${userId}`)
      .send({
        name: 'User A Updated',
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name', 'User A Updated');
  });

  test('debería eliminar un usuario', async () => {
    const response = await request(app).delete(`/api/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Usuario eliminado');
  });
});
