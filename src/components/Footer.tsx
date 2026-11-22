import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <div style={{ marginBottom: "16px" }}>
            <Image
              src="/logo/logo.webp"
              alt="القبطان لدق طلمبات المياة الجوفية"
              width={140}
              height={90}
              style={{
                height: "auto",
                maxHeight: "75px",
                width: "auto",
                display: "block",
              }}
            />
          </div>
          <p>
            مؤسسة متخصصة في دق طلمبات المياة واستخراج المياة الجوفية وعمل البريمات
            والمجسات بأحدث المعدات في جميع أنحاء مصر.
          </p>
          <p>
            <strong>اتصل بنا</strong>
            <br />
            <a
              href="tel:01204746971"
              style={{
                color: "var(--green)",
                fontWeight: 700,
                fontSize: "18px",
              }}
            >
              01204746971
            </a>
          </p>
          <p className="copyright">
            Copyright © 2026 القبطان لدق طلمبات المياة الجوفية | جميع الحقوق
            محفوظة
          </p>
        </div>

        <div className="footer-col">
          <h2 className="widget-title">ساعات العمل</h2>
          <ul>
            <li>
              <strong>السبت: 24 ساعة</strong>
            </li>
            <li>
              <strong>الأحد: 24 ساعة</strong>
            </li>
            <li>
              <strong>الاثنين: 24 ساعة</strong>
            </li>
            <li>
              <strong>الثلاثاء: 24 ساعة</strong>
            </li>
            <li>
              <strong>الأربعاء: 24 ساعة</strong>
            </li>
            <li>
              <strong>الخميس: 24 ساعة</strong>
            </li>
            <li>
              <strong>الجمعة: 24 ساعة</strong>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="widget-title">خدماتنا</h2>
          <ul>
            <li>
              <a href="#services">دق طلمبات مياة للمنازل والفلل</a>
            </li>
            <li>
              <a href="#services">دق طلمبات للأراضي الزراعية والمزارع</a>
            </li>
            <li>
              <a href="#services">استخراج مياه جوفية للمقاولات والإنشاءات</a>
            </li>
            <li>
              <a href="#services">عمل بريمات ومجسات للتربة</a>
            </li>
            <li>
              <a href="#method">إنزال مواسير بلاستيك وحديد معتمدة</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
