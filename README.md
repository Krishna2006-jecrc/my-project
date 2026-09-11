# SKN Tours website

This project has a React frontend and a Django backend. Business data is managed from the Django admin panel, so packages, destinations, bookings and customer enquiries do not need code changes.

## Start locally

Open two PowerShell windows from this folder.

```powershell
cd backend
..\env\Scripts\python.exe manage.py runserver
```
cd backend

```powershell
cd frontend
npm run dev
```

Open the address shown by Vite (normally `http://localhost:5173`). The business dashboard is at `http://127.0.0.1:8000/admin/`.

## Add or update business data

1. Sign in to the admin dashboard.
2. Add destinations first, including a clear landscape image, category, rating and featured flag.
3. Add packages and select the destination, price, duration, seats and package type.
4. Review new enquiries under **Contacts** and booking requests under **Bookings**. Mark a request confirmed only after checking availability and payment.

Do not publish the development server directly on the internet. Before launch, use a production host, set a new `SECRET_KEY`, turn off `DEBUG`, configure `ALLOWED_HOSTS`, and use HTTPS.
