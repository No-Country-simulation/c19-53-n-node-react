require('dotenv').config();

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/index');
const Transaction = require('../src/models/Transaction');
const Company = require('../src/models/Company');
const User = require('../src/models/User');

let company, user;

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  company = new Company({
    name: 'Company A',
    legalDocument: '12345678',
    email: 'companya@example.com',
    password: 'password123',
  });
  await company.save();

  user = new User({
    name: 'User A',
    document: '87654321',
    email: 'usera@example.com',
    password: 'password123',
    role: 'empleado',
    company: company._id,
  });
  await user.save();
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Controladores de Transacción', () => {
  let transactionId;

  test('debería crear una nueva transacción', async () => {
    const response = await request(app)
      .post('/api/transactions')
      .send({
        monto: 100,
        usuarioEmisor: company._id,
        usuarioReceptor: user._id,
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    transactionId = response.body._id;
  });

  test('debería obtener todas las transacciones', async () => {
    const response = await request(app).get('/api/transactions');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('debería obtener una transacción por ID', async () => {
    const response = await request(app).get(`/api/transactions/${transactionId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id', transactionId);
  });

  test('debería actualizar una transacción', async () => {
    const response = await request(app)
      .put(`/api/transactions/${transactionId}`)
      .send({
        monto: 150,
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('monto', 150);
  });

  test('debería eliminar una transacción', async () => {
    const response = await request(app).delete(`/api/transactions/${transactionId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Transacción eliminada');
  });
});
