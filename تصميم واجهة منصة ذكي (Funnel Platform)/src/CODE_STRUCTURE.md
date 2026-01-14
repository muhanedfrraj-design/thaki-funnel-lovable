# 🏗️ بنية الكود - شرح مبسط

## 📁 ملفات المشروع

```
منصة-ذكي/
│
├── 📄 App.tsx                    # المحور الرئيسي - يتحكم في كل شيء
│
├── 📁 components/                # المكونات (القطع التي يتكون منها التطبيق)
│   ├── 🎓 StudentDashboard.tsx  # شاشة الطالب
│   ├── 👨‍🏫 TeacherDashboard.tsx  # شاشة المدرس
│   ├── 💼 SalesDashboard.tsx    # شاشة المبيعات
│   ├── ⚙️ AdminDashboard.tsx    # شاشة المدير
│   ├── 🔐 LoginPage.tsx         # شاشة تسجيل الدخول
│   ├── 🎨 Logo.tsx              # الشعار
│   ├── 🔘 Button.tsx            # الأزرار
│   ├── 🎴 Card.tsx              # البطاقات
│   └── ...                      # مكونات أخرى
│
├── 📁 styles/                   # التنسيقات والألوان
│   └── 🎨 globals.css           # الألوان والخطوط الرئيسية
│
└── 📁 ملفات التوجيه/           # ملفات المساعدة
    ├── START_HERE.md            # ابدأ من هنا
    ├── HOW_TO_USE.md            # دليل الاستخدام
    └── CODE_STRUCTURE.md        # هذا الملف!
```

---

## 🔄 كيف يعمل التطبيق - بالتفصيل

### 1. نقطة البداية: `App.tsx`

```tsx
// App.tsx
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);  // المستخدم الحالي
  
  // إذا لم يسجل دخول → أعرض صفحة تسجيل الدخول
  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }
  
  // إذا سجل دخول → أعرض شاشته حسب دوره
  switch (user.role) {
    case 'student': return <StudentDashboard />;
    case 'teacher': return <TeacherDashboard />;
    case 'sales': return <SalesDashboard />;
    case 'admin': return <AdminDashboard />;
  }
}
```

**الفكرة**: 
- التطبيق يبدأ بدون مستخدم
- يعرض صفحة تسجيل الدخول
- بعد التسجيل، يعرض الشاشة المناسبة

---

### 2. صفحة تسجيل الدخول: `LoginPage.tsx`

```tsx
export function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState('student');
  
  const handleSubmit = () => {
    // إنشاء مستخدم تجريبي
    const user = {
      name: email.split('@')[0],
      email: email,
      role: selectedRole
    };
    
    // إرساله للـ App.tsx
    onLogin(user);
  };
}
```

**الفكرة**:
- المستخدم يدخل البريد ويختار الدور
- عند الضغط على "تسجيل دخول"
- ينشئ كائن مستخدم ويرسله لـ App.tsx

---

### 3. شاشات المستخدمين

#### 🎓 شاشة الطالب: `StudentDashboard.tsx`

```tsx
export function StudentDashboard({ user, onLogout }) {
  const [sessions, setSessions] = useState([...mockSessions]);
  const [showBookingForm, setShowBookingForm] = useState(false);
  
  return (
    <div>
      {/* الإحصائيات */}
      <Stats sessions={sessions} />
      
      {/* زر حجز حصة جديدة */}
      <Button onClick={() => setShowBookingForm(true)}>
        حجز حصة جديدة
      </Button>
      
      {/* نموذج الحجز */}
      {showBookingForm && <BookingForm />}
      
      {/* قائمة الحصص */}
      <SessionsList sessions={sessions} />
    </div>
  );
}
```

**الأجزاء الرئيسية**:
1. **الإحصائيات**: كم حصة، كم مجدولة، كم مكتملة
2. **زر الحجز**: يفتح نموذج حجز الحصة
3. **النموذج**: لملء بيانات الحصة الجديدة
4. **القائمة**: تعرض كل حصص الطالب

---

#### 👨‍🏫 شاشة المدرس: `TeacherDashboard.tsx`

```tsx
export function TeacherDashboard({ user, onLogout }) {
  const [sessions, setSessions] = useState([...mockSessions]);
  
  // الحصص المتاحة = حصص بدون معلم
  const availableSessions = sessions.filter(s => !s.teacherId);
  
  // حصصي = الحصص المعينة لي
  const mySessions = sessions.filter(s => s.teacherId === user.id);
  
  return (
    <div>
      {/* الإحصائيات */}
      <Stats mySessions={mySessions} />
      
      {/* الحصص المتاحة */}
      <AvailableSessions 
        sessions={availableSessions}
        onAccept={acceptSession}
      />
      
      {/* حصصي */}
      <MySessions 
        sessions={mySessions}
        onComplete={completeSession}
      />
    </div>
  );
}
```

**الأجزاء الرئيسية**:
1. **الإحصائيات**: إجمالي حصصي والمكتملة
2. **الحصص المتاحة**: حصص يمكن قبولها
3. **حصصي**: الحصص المعينة لي

---

#### 💼 شاشة المبيعات: `SalesDashboard.tsx`

```tsx
export function SalesDashboard({ user, onLogout }) {
  const [sessions, setSessions] = useState([...mockSessions]);
  const [activeTab, setActiveTab] = useState('sessions');
  
  return (
    <div>
      {/* الإحصائيات الشاملة */}
      <Stats sessions={sessions} />
      
      {/* التبويبات */}
      <Tabs>
        <Tab name="sessions">الحصص</Tab>
        <Tab name="customers">العملاء</Tab>
      </Tabs>
      
      {/* المحتوى حسب التبويب */}
      {activeTab === 'sessions' && (
        <AllSessions 
          sessions={sessions}
          onFollowUp={followUpCustomer}
        />
      )}
      
      {activeTab === 'customers' && (
        <AllCustomers customers={customers} />
      )}
    </div>
  );
}
```

**الأجزاء الرئيسية**:
1. **الإحصائيات**: كل الحصص في النظام
2. **تبويب الحصص**: عرض جميع الحصص
3. **تبويب العملاء**: عرض جميع العملاء
4. **المتابعة**: إضافة ملاحظات وتحديث الحالة

---

#### ⚙️ شاشة المدير: `AdminDashboard.tsx`

```tsx
export function AdminDashboard({ user, onLogout }) {
  const [sessions, setSessions] = useState([...mockSessions]);
  const [activeTab, setActiveTab] = useState('overview');
  
  // حساب الإحصائيات
  const stats = {
    total: sessions.length,
    completed: sessions.filter(s => s.status === 'completed').length,
    scheduled: sessions.filter(s => s.status === 'scheduled').length,
    // ...
  };
  
  return (
    <div>
      {/* التبويبات */}
      <Tabs>
        <Tab name="overview">نظرة عامة</Tab>
        <Tab name="sessions">جميع الحصص</Tab>
      </Tabs>
      
      {/* نظرة عامة */}
      {activeTab === 'overview' && (
        <div>
          <StatsCards stats={stats} />
          <Charts sessions={sessions} />
          <RecentSessions sessions={sessions} />
        </div>
      )}
      
      {/* جميع الحصص */}
      {activeTab === 'sessions' && (
        <AllSessionsWithDelete 
          sessions={sessions}
          onDelete={deleteSession}
        />
      )}
    </div>
  );
}
```

**الأجزاء الرئيسية**:
1. **الإحصائيات المتقدمة**: أرقام شاملة
2. **الرسوم البيانية**: توزيع الحصص والمواد
3. **أحدث الحصص**: آخر 5 حصص
4. **إدارة كاملة**: حذف وتعديل

---

## 🎨 المكونات القابلة لإعادة الاستخدام

### Button (الزر)

```tsx
// components/Button.tsx
export function Button({ 
  variant = 'primary',  // primary, secondary, outline, ghost
  size = 'md',         // sm, md, lg
  children,
  onClick 
}) {
  return (
    <button className={`btn-${variant} btn-${size}`} onClick={onClick}>
      {children}
    </button>
  );
}
```

**الاستخدام**:
```tsx
<Button variant="primary" size="lg" onClick={handleClick}>
  احجز الآن
</Button>
```

---

### Card (البطاقة)

```tsx
// components/Card.tsx
export function Card({ 
  children, 
  hover = false,
  padding = 'md' 
}) {
  return (
    <div className={`card ${hover ? 'card-hover' : ''} p-${padding}`}>
      {children}
    </div>
  );
}
```

**الاستخدام**:
```tsx
<Card hover padding="lg">
  <h3>عنوان البطاقة</h3>
  <p>محتوى البطاقة</p>
</Card>
```

---

## 📊 تدفق البيانات

```
المستخدم يكتب بيانات
       ↓
    [Form]
       ↓
  handleSubmit()
       ↓
   setSessions([...sessions, newSession])
       ↓
    State يتحدث
       ↓
   الواجهة تتحدث تلقائياً
```

**مثال**:
```tsx
// الطالب يحجز حصة
const handleBooking = (sessionData) => {
  // إضافة الحصة الجديدة
  setSessions([...sessions, {
    id: Math.random().toString(),
    ...sessionData,
    status: 'pending'
  }]);
  
  // الواجهة تتحدث تلقائياً!
};
```

---

## 🔄 حالات الحصة (Session Status)

```tsx
const STATUS = {
  pending: 'قيد المراجعة',     // جديدة، لم يتم قبولها
  scheduled: 'مجدولة',          // معينة لمعلم
  completed: 'مكتملة',          // تمت بنجاح
  cancelled: 'ملغية'            // تم إلغاؤها
};
```

**التدفق الطبيعي**:
```
pending → (المعلم يقبل) → scheduled → (المعلم ينهي) → completed
```

---

## 🎨 الأنماط: `styles/globals.css`

```css
/* الألوان الأساسية */
:root {
  --color-primary: #6c4ee3;      /* البنفسجي */
  --color-secondary: #ffd447;    /* الأصفر */
  --color-white: #ffffff;        /* الأبيض */
}

/* أنماط الأزرار */
.btn-primary {
  background: var(--color-primary);
  color: white;
  border-radius: 1rem;
  /* ... */
}

/* أنماط البطاقات */
.card {
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  /* ... */
}
```

---

## 🔐 نظام المصادقة الحالي (تجريبي)

```tsx
// في LoginPage.tsx
const handleSubmit = () => {
  // إنشاء مستخدم تجريبي
  const mockUser = {
    id: Math.random().toString(),
    name: email.split('@')[0],
    email: email,
    role: selectedRole
  };
  
  // تسجيل الدخول
  onLogin(mockUser);
};
```

**⚠️ ملاحظة**: هذا تجريبي! لنظام حقيقي، احتاج تحويله لـ Supabase.

---

## 🔄 التحويل لنظام حقيقي (Supabase)

### الوضع الحالي (تجريبي):
```tsx
const [sessions, setSessions] = useState(mockSessions);
```
البيانات في الذاكرة فقط

### الوضع المتقدم (Supabase):
```tsx
// استرجاع البيانات من الخادم
const fetchSessions = async () => {
  const response = await fetch('/api/sessions');
  const data = await response.json();
  setSessions(data);
};

useEffect(() => {
  fetchSessions();
}, []);
```

---

## 📝 ملخص سريع

| الملف | الوظيفة | المسؤول عنه |
|------|---------|-------------|
| `App.tsx` | المحور الرئيسي | توجيه المستخدم للشاشة المناسبة |
| `LoginPage.tsx` | تسجيل الدخول | إنشاء مستخدم تجريبي |
| `StudentDashboard.tsx` | شاشة الطالب | حجز وعرض الحصص |
| `TeacherDashboard.tsx` | شاشة المعلم | قبول وإتمام الحصص |
| `SalesDashboard.tsx` | شاشة المبيعات | متابعة العملاء |
| `AdminDashboard.tsx` | شاشة المدير | إدارة ومراقبة كل شيء |
| `Button.tsx` | زر | مكون قابل لإعادة الاستخدام |
| `Card.tsx` | بطاقة | مكون قابل لإعادة الاستخدام |
| `globals.css` | الأنماق | الألوان والتنسيقات |

---

## 🚀 الخطوات التالية

1. ✅ **استكشف الكود**: افتح الملفات واقرأها
2. ✅ **جرب التعديلات**: غير الألوان، النصوص، إلخ
3. ✅ **أضف ميزات**: أخبرني بما تريد إضافته
4. ✅ **حول لـ Supabase**: للحصول على نظام حقيقي

---

© 2026 منصة ذكي - كود نظيف ومفهوم ✨
