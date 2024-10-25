import { test, expect } from "@playwright/test";
import axios from "axios";

test("get all - validate a specific user is in the array", async ({ page }) => {
  const resposne = await axios.get("https://reqres.in/api/users?page=2");

  const expected_user = {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  };

  expect(resposne.status).toEqual(200);

  console.log(resposne.data);

  const users_array = resposne.data.data;

  expect(users_array).toContainEqual(expected_user);
});

test("Create New User", async ({ page }) => {
  const data = {
    name: "morpheus",
    job: "leader",
  };

  const expected_response = {
    name: "morpheus",
    job: "leader",
    id: "393",
    createdAt: "2024-10-25T12:44:26.086Z",
  };
  const resposne = await axios.post("https://reqres.in/api/users", data);

  expect(resposne.status).toEqual(201);
  
});


