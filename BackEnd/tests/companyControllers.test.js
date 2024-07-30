require('dotenv').config();

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/index');
const Company = require('../src/models/Company');
const User = require('../src/models/User');

let companyId;
let userId;

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

  const user = new User({
    name: 'User A',
    document: '87654321',
    email: 'usera@example.com',
    password: 'password123',
    role: 'empleado',
    company: companyId,
  });
  const savedUser = await user.save();
  userId = savedUser._id;
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Controladores de Empresa', () => {

  test('debería crear una nueva empresa', async () => {
    const response = await request(app)
      .post('/api/companies')
      .send({
        name: 'Company B',
        legalDocument: '87654321',
        email: 'companyb@example.com',
        password: 'password123',
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
  });

  test('debería crear un nuevo usuario para una empresa', async () => {
    const response = await request(app)
      .post(`/api/companies/${companyId}/users`)
      .send({
        name: 'User B',
        document: '12345678',
        email: 'userb@example.com',
        password: 'password123',
        role: 'empleado',
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
  });

  test('debería obtener todas las empresas', async () => {
    const response = await request(app).get('/api/companies');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('debería obtener empleados por empresa', async () => {
    const response = await request(app).get(`/api/usersbycompany/${companyId}`);
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('debería eliminar una empresa', async () => {
    const response = await request(app).delete(`/api/company/${companyId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Empresa eliminada');
  });
});
