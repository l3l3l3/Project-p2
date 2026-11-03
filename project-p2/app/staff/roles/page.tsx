
export default function RolesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-800">
        บทบาทและสิทธิ์
      </h1>

      <p className="mt-2 text-slate-500">
        หน้าจัดการบทบาทและสิทธิ์ของพนักงาน
      </p>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">
          รายการบทบาท
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          พื้นที่สำหรับจัดการสิทธิ์ผู้ใช้งาน
        </p>
      </div>
    </div>
  );
}
