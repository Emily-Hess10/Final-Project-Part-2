import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
const SECRET = "supersecretkey";

// --- Pre-created admin user ---
const adminPassword = bcrypt.hashSync("admin123", 10);

let users = [
  {
    email: "admin@fittrack.com",
    password: adminPassword,
    role: "admin",
  },
];

// --- LOGIN ---
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  const user = users.find((u) => u.email === email);
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { email: user.email, role: user.role },
    SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token, email: user.email, role: user.role });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});