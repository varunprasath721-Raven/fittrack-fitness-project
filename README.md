# FitTrack — Full Stack Fitness Website

A syllabus-aligned React + Django fitness project.

## Stack
- React + Vite
- React Router
- Context API + Redux Toolkit
- Axios
- CSS Modules / plain CSS / Tailwind-ready structure
- Django + SQLite
- Django REST Framework
- JWT authentication
- Django Admin
- Django Forms
- Sessions & Cookies
- CRUD REST APIs
- CORS
- Production build/deployment ready structure

## Main features
- Home / dashboard
- BMI calculator
- Calorie calculator
- Workout CRUD
- Exercise list rendering
- Diet/meal tracking
- Progress tracking
- Login/register
- Protected routes
- API loading/error states
- Redux Toolkit state management
- Django admin
- JWT auth

## Run backend
```bash
cd backend
python -m venv venv
# Windows:
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

## Run frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend expects API at `http://127.0.0.1:8000/api/`.

## Environment
Create `frontend/.env`:
```env
VITE_API_URL=http://127.0.0.1:8000/api
```

Create backend environment variables for production:
```env
DJANGO_SECRET_KEY=change-me
DJANGO_DEBUG=False
DJANGO_ALLOWED_HOSTS=your-domain.com
CORS_ALLOWED_ORIGINS=https://your-frontend.vercel.app
```

## Syllabus mapping
React:
- JSX, components, props, state, events, forms, lists/keys
- useState/useEffect/useContext/useRef/useReducer/useCallback/useMemo/useLayoutEffect
- custom hook
- React Router
- Redux fundamentals + RTK + createAsyncThunk
- REST API + GET/POST/PUT/DELETE
- CSS approaches
- production build and deployment

Django:
- project/app structure, URLs/views/templates
- models, migrations, ORM CRUD
- admin and permissions
- forms, ModelForms, email
- template language
- Bootstrap-ready templates
- sessions/cookies
- SQLite
- DRF serializers/ViewSets/routers/JWT
- environment variables
- Gunicorn/uWSGI and Render deployment
