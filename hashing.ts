const password = "rahasia";
const passwordHash = await Bun.password.hash(password, {
  algorithm: "bcrypt",
  cost: 10,
});

const resultFailed = await Bun.password.verify("salah", passwordHash);
console.log(resultFailed);

const resultSuccess = await Bun.password.verify(password, passwordHash);
console.log(resultSuccess);
