import React, { useState } from "react";
import { Form, Input, Button, Card, Typography } from "antd";

const { Title } = Typography;

function App() {
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit() {
    setSubmittedData(formData);
    setFormData({ name: "", description: "" });
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <Title>Форма с использованием Ant Design</Title>
      <Form layout="vertical">
        <Form.Item label="Имя">
          <Input
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Описание">
          <Input
            name="description"
            value={formData.description}
            placeholder="Description"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>
            Отправить
          </Button>
        </Form.Item>
      </Form>
      {submittedData && (
        <Card
          title="Отправленные данные:"
          bordered={false}
          style={{
            width: 300,
          }}
        >
          <p>Имя: {submittedData.name}</p>
          <p>Описание: {submittedData.description}</p>
        </Card>
      )}
    </div>
  );
}

export default App;
