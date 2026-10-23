import axios from 'axios';

// رابط الباك إند (FastAPI)
const API_URL = 'http://localhost:8000';

// إنشاء نسخة axios مع الإعدادات
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ============ دوال الـ API ============

// جلب كل المشاريع
export const getProjects = async () => {
  const response = await api.get('/api/projects');
  return response.data;
};


export const getSkills = async () => {
  const response = await api.get('/api/skills');
  return response.data;
};

// جلب مشروع واحد حسب الـ ID
export const getProject = async (id) => {
  const response = await api.get(`/api/projects/${id}`);
  return response.data;
};

// إرسال رسالة تواصل
export const sendMessage = async (formData) => {
  const response = await api.post('/api/contact', formData);
  return response.data;
};

export default api;