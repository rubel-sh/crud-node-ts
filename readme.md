# Quick Start

Clone This Repository

```sh
git clone https://github.com/rubel-sh/crud-node-ts
```

Install dev dependencies

```sh
pnpm install // or npm install
```

Start development server with live preview

```sh
pnpm dev // or npm run dev
```

Generate build files for production server in dist folder

```sh
pnpm build // or npm run build
```

Start server from production build

```sh
pnpm start // or npm run start
```

# Routes

## BASE URL :

```sh
http://localhost:5432/api/v1
```

Create User route : (POST)

```sh
/user/create
```

Read User route (GET)

```sh
/user
```

Update User route (PATCH)

```sh
/:userID?username=<username>&password=<password>
```

Delete User route (DELETE)

```sh
/user:userID
```
