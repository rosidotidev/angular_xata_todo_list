
# **Angular Xata Todo List**

This project is a **Todo List Application** built with **Angular 18**, styled using **Angular Material**, and powered by **Xata** for serverless data storage. The application includes features like user authentication, task management, and filtering.

---

## **Features**
- 📝 **Task Management**: Add, edit, delete, and update task status.
- 👥 **User Authentication**: Secure login system tied to user accounts stored in Xata.
- 🔍 **Filtering**: Filter tasks by status (All, Open, Selected).
- 📱 **Responsive Design**: Fully responsive UI built with Angular Material.

---

## **Getting Started**

### **Prerequisites**
1. **Node.js**: Version `18.13` or higher.
2. **Angular CLI**: Install globally with:
   ```bash
   npm install -g @angular/cli
   ```
3. **Xata CLI**: Install globally with:
   ```bash
   npm install -g @xata.io/cli
   ```

---

### **Setup**
1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/angular-xata-todo-list.git
   cd angular-xata-todo-list
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Add your Xata credentials**:
   - Create a `secrets.ts` file under the `src` directory:
     ```typescript
     export const secrets = {
       xataApiKey: 'YOUR_XATA_API_KEY',
       xataDbUrl: 'YOUR_XATA_DB_URL'
     };
     ```

4. **Run the development server**:
   ```bash
   ng serve
   ```
   The application will be available at [http://localhost:4200](http://localhost:4200).

---

### **Build for Production**
To create a production-ready build, run:
```bash
ng build --configuration production
```
The output will be in the `dist/angular-xata-todo-list` directory.

---

## **Project Structure**
```
src/
├── app/
│   ├── auth/             # Login module
│   ├── todos/            # Todo list module
│   ├── services/         # Xata integration services
│   ├── app.component.*   # Root component
├── assets/               # Static assets
├── environments/         # Environment-specific configurations
├── index.html            # Main HTML file
└── main.ts               # Application entry point
```

---

## **How to Use**
1. **Login**: Enter your username and password to access the app.
2. **Manage Tasks**:
   - Add new tasks using the input form.
   - Click on tasks to edit or update their status.
   - Delete tasks with the delete button.
3. **Filter Tasks**: Use the footer buttons to filter tasks by status.

---

## **Technologies Used**
- **Frontend**:
  - Angular 18
  - Angular Material
- **Backend**:
  - Xata for serverless database management

---

## **Screenshots**
### **Login Page**
![Login Page](https://via.placeholder.com/800x400?text=Login+Page)

### **Todo List**
![Todo List](https://via.placeholder.com/800x400?text=Todo+List)

---

## **Contributing**
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/new-feature
   ```
5. Open a pull request.

---

## **License**
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## **Contact**
For questions or support, please reach out to:
- **Author**: [Your Name](mailto:your-email@example.com)
- **GitHub**: [Your GitHub Profile](https://github.com/your-username)
