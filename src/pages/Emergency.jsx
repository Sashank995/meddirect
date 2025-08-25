// // src/pages/Emergency.jsx
// import React, { useState, useEffect } from "react";
// import { Phone, MapPin, AlertTriangle, User, Heart } from "lucide-react";

// export default function Emergency() {
//   const [locationLink, setLocationLink] = useState("");
//   const [emergencyContacts, setEmergencyContacts] = useState([]);
//   const [medicalId, setMedicalId] = useState(null);

//   // ✅ Fetch emergency contacts from backend
//   useEffect(() => {
//     fetch("https://medirectbackend.onrender.com/api/emergency/contacts")
//       .then((res) => res.json())
//       .then((data) => setEmergencyContacts(data))
//       .catch((err) => console.error("Error fetching contacts:", err));

//     // ✅ Fetch medical ID from backend
//     fetch("https://medirectbackend.onrender.com/api/emergency/medical-id")
//       .then((res) => res.json())
//       .then((data) => setMedicalId(data))
//       .catch((err) => console.error("Error fetching medical ID:", err));
//   }, []);

//   // ✅ Get current location and send to backend
//   const getLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const lat = position.coords.latitude;
//         const lng = position.coords.longitude;
//         const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
//         setLocationLink(mapsUrl);

//         // Send location to backend
//         fetch("https://medirectbackend.onrender.com/api/emergency/location", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ latitude: lat, longitude: lng, link: mapsUrl }),
//         }).catch((err) => console.error("Error sending location:", err));

//         window.open(mapsUrl, "_blank");
//       });
//     } else {
//       alert("Geolocation not supported on this browser.");
//     }
//   };

//   // ✅ Panic button API call
//   const triggerPanic = () => {
//     fetch("https://medirectbackend.onrender.com/api/emergency/panic", { method: "POST" })
//       .then(() => alert("🚨 Panic alert sent to your emergency contacts!"))
//       .catch((err) => console.error("Error triggering panic:", err));
//   };

//   return (
//     <div className="min-h-screen bg-red-50 p-6">
//       <h1 className="text-3xl font-bold text-red-700 mb-4 flex items-center gap-2">
//         <AlertTriangle /> Emergency Help
//       </h1>

//       {/* Emergency Contacts */}
//       <div className="grid md:grid-cols-3 gap-4">
//         {emergencyContacts.length > 0 ? (
//           emergencyContacts.map((contact, idx) => (
//             <a
//               key={idx}
//               href={`tel:${contact.number}`}
//               className="flex items-center gap-3 bg-white rounded-xl shadow-md p-4 border hover:shadow-lg transition"
//             >
//               {contact.name === "Ambulance" ? (
//                 <Heart className="text-red-500" />
//               ) : (
//                 <AlertTriangle className="text-blue-500" />
//               )}
//               <div>
//                 <p className="font-semibold">{contact.name}</p>
//                 <p className="text-sm text-gray-500">{contact.number}</p>
//               </div>
//               <Phone className="ml-auto text-green-500" />
//             </a>
//           ))
//         ) : (
//           <p className="text-gray-500">Loading emergency contacts...</p>
//         )}
//       </div>

//       {/* Share Location */}
//       <div className="mt-6 p-4 bg-white border rounded-xl shadow-md hover:shadow-lg transition">
//         <h2 className="text-xl font-semibold flex items-center gap-2">
//           <MapPin /> Share Location
//         </h2>
//         <p className="text-gray-600 mt-1">
//           Share your real-time location with emergency responders or family.
//         </p>
//         <button
//           onClick={getLocation}
//           className="mt-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
//         >
//           Get My Location
//         </button>
//         {locationLink && (
//           <p className="mt-2 text-sm text-blue-600 break-words">
//             Location:{" "}
//             <a href={locationLink} target="_blank" rel="noreferrer">
//               {locationLink}
//             </a>
//           </p>
//         )}
//       </div>

//       {/* Medical ID */}
//       <div className="mt-6 p-4 bg-white border rounded-xl shadow-md hover:shadow-lg transition">
//         <h2 className="text-xl font-semibold flex items-center gap-2">
//           <User /> My Medical ID
//         </h2>
//         {medicalId ? (
//           <ul className="mt-2 text-gray-700 space-y-1">
//             <li>
//               <strong>Name:</strong> {medicalId.name}
//             </li>
//             <li>
//               <strong>Blood Group:</strong> {medicalId.bloodGroup}
//             </li>
//             <li>
//               <strong>Allergies:</strong> {medicalId.allergies}
//             </li>
//             <li>
//               <strong>Chronic Conditions:</strong> {medicalId.conditions}
//             </li>
//           </ul>
//         ) : (
//           <p className="text-gray-500">Loading medical ID...</p>
//         )}
//       </div>

//       {/* Panic Button */}
//       <div className="mt-6">
//         <button
//           onClick={triggerPanic}
//           className="w-full py-3 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-700 transition shadow-lg"
//         >
//           🚨 PANIC BUTTON
//         </button>
//       </div>
//     </div>
//   );
// }





import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Phone,
  MapPin,
  AlertTriangle,
  User,
  Heart,
  Bell,
  Copy,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Plus,
  Edit,
  Trash,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

/**
 * Emergency.jsx (frontend‑only)
 * - No backend calls. Uses localStorage for persistence.
 * - Step‑by‑step setup wizard (Contacts → Medical ID → Notifications → Done)
 * - Notification center + toast toasts
 * - Panic button: vibration + on‑screen flash + Notification API (if allowed)
 * - Share Location: geolocation + Maps link + copy + Web Share API (if available)
 */

/** ---------- utilities ---------- */
const KEYS = {
  contacts: "emergency_contacts_v1",
  medicalId: "emergency_medicalid_v1",
  wizardSeen: "emergency_wizard_seen_v1",
  notifHistory: "emergency_notifications_v1",
};

const defaultContacts = [
  { id: crypto.randomUUID(), name: "Ambulance", number: "108", type: "service", icon: "heart" },
  { id: crypto.randomUUID(), name: "Police", number: "100", type: "service", icon: "alert" },
  { id: crypto.randomUUID(), name: "Fire", number: "101", type: "service", icon: "alert" },
  { id: crypto.randomUUID(), name: "Primary Contact", number: "+91 98XX‑XXX‑123", type: "personal", icon: "user" },
];

const defaultMedicalId = {
  name: "Your Name",
  bloodGroup: "O+",
  allergies: "None",
  conditions: "None",
  emergencyNote: "N/A",
};

function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}

/** ---------- Toasts (lightweight) ---------- */
function useToasts() {
  const [toasts, setToasts] = useState([]);
  const push = (msg, variant = "info", ttl = 3500) => {
    const id = crypto.randomUUID();
    setToasts((s) => [...s, { id, msg, variant }]);
    setTimeout(() => setToasts((s) => s.filter((t) => t.id !== id)), ttl);
  };
  const remove = (id) => setToasts((s) => s.filter((t) => t.id !== id));
  return { toasts, push, remove };
}

function ToastStack({ toasts, onClose }) {
  return (
    <div className="fixed bottom-4 right-4 z-[80] space-y-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={classNames(
            "flex items-start gap-2 rounded-xl px-3 py-2 shadow border bg-white",
            t.variant === "success"
              ? "border-green-200"
              : t.variant === "error"
              ? "border-red-200"
              : "border-gray-200"
          )}
          role="status"
        >
          {t.variant === "success" ? (
            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
          ) : t.variant === "error" ? (
            <AlertCircle className="w-4 h-4 text-red-600 mt-0.5" />
          ) : (
            <Bell className="w-4 h-4 text-gray-600 mt-0.5" />
          )}
          <div className="text-sm text-gray-800">{t.msg}</div>
          <button
            className="ml-2 text-gray-400 hover:text-gray-600"
            onClick={() => onClose(t.id)}
            aria-label="Dismiss notification"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

/** ---------- Simple Modal ---------- */
function Modal({ open, onClose, title, children, footer }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full md:w-[560px] bg-white rounded-t-2xl md:rounded-2xl shadow-xl p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto">{children}</div>
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  );
}

/** ---------- Notification center ---------- */
function useNotifHistory() {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(KEYS.notifHistory);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem(KEYS.notifHistory, JSON.stringify(items));
  }, [items]);
  const push = (text) =>
    setItems((s) => [{ id: crypto.randomUUID(), text, read: false, ts: Date.now() }, ...s]);
  const markAllRead = () => setItems((s) => s.map((n) => ({ ...n, read: true })));
  return { items, push, markAllRead };
}

/** ---------- Stepper UI ---------- */
function Stepper({ steps, current }) {
  return (
    <ol className="grid md:grid-cols-4 gap-2">
      {steps.map((s, i) => (
        <li
          key={s}
          className={classNames(
            "rounded-2xl border px-3 py-2 text-sm flex items-center gap-2",
            i < current ? "bg-green-50 border-green-200" : i === current ? "bg-white border-green-400" : "bg-white border-gray-200"
          )}
        >
          <div
            className={classNames(
              "w-5 h-5 rounded-full flex items-center justify-center text-[11px]",
              i < current ? "bg-green-600 text-white" : i === current ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
            )}
          >
            {i + 1}
          </div>
          <span className="truncate">{s}</span>
        </li>
      ))}
    </ol>
  );
}

/** ---------- Main Component ---------- */
export default function Emergency() {
  const { toasts, push, remove } = useToasts();
  const notif = useNotifHistory();

  // data
  const [contacts, setContacts] = useState(() => {
    try {
      const saved = localStorage.getItem(KEYS.contacts);
      return saved ? JSON.parse(saved) : defaultContacts;
    } catch {
      return defaultContacts;
    }
  });
  const [medicalId, setMedicalId] = useState(() => {
    try {
      const saved = localStorage.getItem(KEYS.medicalId);
      return saved ? JSON.parse(saved) : defaultMedicalId;
    } catch {
      return defaultMedicalId;
    }
  });
  useEffect(() => localStorage.setItem(KEYS.contacts, JSON.stringify(contacts)), [contacts]);
  useEffect(() => localStorage.setItem(KEYS.medicalId, JSON.stringify(medicalId)), [medicalId]);

  // wizard
  const [wizardStep, setWizardStep] = useState(() => (localStorage.getItem(KEYS.wizardSeen) ? 3 : 0));
  const steps = ["Contacts", "Medical ID", "Notifications", "Ready!"];
  useEffect(() => {
    if (wizardStep === 3) localStorage.setItem(KEYS.wizardSeen, "1");
  }, [wizardStep]);

  // ui state
  const [locationLink, setLocationLink] = useState("");
  const [editingContact, setEditingContact] = useState(null);
  const [medicalOpen, setMedicalOpen] = useState(false);
  const [notifPanelOpen, setNotifPanelOpen] = useState(false);
  const [flash, setFlash] = useState(false);

  /** --------- geolocation / share --------- */
  const getLocation = async () => {
    if (!navigator.geolocation) {
      push("Geolocation not supported.", "error");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toFixed(6);
        const lng = pos.coords.longitude.toFixed(6);
        const url = `https://www.google.com/maps?q=${lat},${lng}`;
        setLocationLink(url);
        push("Location captured.", "success");
        notif.push("Location captured and ready to share.");
        // Try Web Share API
        if (navigator.share) {
          navigator
            .share({ title: "My Location", text: "I need help. Here is my location:", url })
            .catch(() => {});
        } else {
          window.open(url, "_blank");
        }
      },
      () => push("Unable to get location.", "error")
    );
  };

  const copyLocation = async () => {
    if (!locationLink) return;
    try {
      await navigator.clipboard.writeText(locationLink);
      push("Location link copied.", "success");
      notif.push("Copied location link.");
    } catch {
      push("Copy failed.", "error");
    }
  };

  /** --------- notifications / panic --------- */
  const askNotificationPermission = async () => {
    if (!("Notification" in window)) {
      push("Notifications not supported in this browser.", "error");
      return;
    }
    try {
      const perm = await Notification.requestPermission();
      if (perm === "granted") {
        new Notification("Notifications enabled", { body: "We'll alert you here." });
        push("Notifications enabled.", "success");
        notif.push("Notifications permission granted.");
      } else if (perm === "denied") {
        push("Notifications denied.", "error");
      } else {
        push("Notifications permission dismissed.", "info");
      }
    } catch {
      push("Permission request failed.", "error");
    }
  };

  const vibrate = (pattern = [200, 100, 200, 100, 400]) => {
    if (navigator.vibrate) navigator.vibrate(pattern);
  };

  const screenFlash = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 300);
  };

  const fireNotification = (title, body) => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification(title, { body });
    }
    notif.push(`${title} — ${body}`);
  };

  const triggerPanic = () => {
    vibrate([300, 100, 300, 100, 600]);
    screenFlash();
    fireNotification("🚨 PANIC ALERT", "Your emergency contacts are being alerted (demo).");
    push("Panic alert triggered (demo).", "error");
  };

  const scheduleSOS = () => {
    push("SOS reminder in ~10s scheduled.", "info");
    setTimeout(() => {
      fireNotification("SOS Reminder", "This is your scheduled safety check.");
      vibrate();
    }, 10000);
  };

  /** --------- contacts CRUD (frontend only) --------- */
  const addContact = () => setEditingContact({ id: crypto.randomUUID(), name: "", number: "", type: "personal" });
  const editContact = (c) => setEditingContact(c);
  const removeContact = (id) => setContacts((s) => s.filter((c) => c.id !== id));
  const saveContact = () => {
    if (!editingContact.name || !editingContact.number) {
      push("Name and number are required.", "error");
      return;
    }
    setContacts((s) => {
      const exists = s.some((x) => x.id === editingContact.id);
      return exists ? s.map((x) => (x.id === editingContact.id ? editingContact : x)) : [editingContact, ...s];
    });
    setEditingContact(null);
    push("Contact saved.", "success");
  };

  /** --------- medical id edit --------- */
  const saveMedical = () => {
    setMedicalOpen(false);
    push("Medical ID saved.", "success");
  };

  /** --------- derived --------- */
  const serviceContacts = useMemo(() => contacts.filter((c) => c.type === "service"), [contacts]);
  const personalContacts = useMemo(() => contacts.filter((c) => c.type !== "service"), [contacts]);

  return (
    <div className="relative min-h-screen bg-red-50 p-6">
      {/* screen flash overlay */}
      {flash && <div className="fixed inset-0 z-[70] bg-red-500/60 animate-pulse pointer-events-none" />}

      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-6">
        <h1 className="text-3xl font-bold text-red-700 flex items-center gap-2">
          <AlertTriangle /> Emergency Help
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setNotifPanelOpen((v) => !v)}
            className="relative px-3 py-2 rounded-lg bg-white border hover:bg-gray-50"
            aria-label="Open notifications"
          >
            <Bell className="w-5 h-5" />
            {notif.items.some((n) => !n.read) && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] px-1 rounded">
                {notif.items.filter((n) => !n.read).length}
              </span>
            )}
          </button>

          {notifPanelOpen && (
            <div className="absolute right-6 top-20 w-80 bg-white border rounded-xl shadow-lg z-40">
              <div className="flex items-center justify-between p-3 border-b">
                <div className="font-medium">Notifications</div>
                <button className="text-sm text-red-700" onClick={notif.markAllRead}>
                  Mark all read
                </button>
              </div>
              <div className="max-h-72 overflow-y-auto">
                {notif.items.length ? (
                  notif.items.map((n) => (
                    <div key={n.id} className={classNames("px-3 py-2 text-sm", n.read ? "text-gray-600" : "text-gray-900")}> 
                      {n.text}
                      <div className="text-[11px] text-gray-400">{new Date(n.ts).toLocaleString()}</div>
                    </div>
                  ))
                ) : (
                  <div className="px-3 py-6 text-sm text-gray-500 text-center">No notifications yet.</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Wizard */}
      <div className="mb-6">
        <Stepper steps={steps} current={wizardStep} />
        <div className="mt-3 rounded-2xl border bg-white p-4">
          {wizardStep === 0 && (
            <div>
              <div className="text-lg font-semibold mb-2">Step 1: Verify emergency contacts</div>
              <p className="text-sm text-gray-600 mb-4">Add family/friends and confirm service numbers below.</p>
              <div className="grid md:grid-cols-2 gap-3">
                {[...serviceContacts, ...personalContacts].map((c) => (
                  <div key={c.id} className="flex items-center gap-3 border rounded-xl p-3">
                    <div className="shrink-0">
                      {c.icon === "heart" ? (
                        <Heart className="text-red-500" />
                      ) : c.icon === "alert" ? (
                        <AlertTriangle className="text-orange-500" />
                      ) : (
                        <User className="text-blue-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{c.name}</div>
                      <div className="text-sm text-gray-600">{c.number}</div>
                    </div>
                    <div className="flex gap-2">
                      <a href={`tel:${c.number}`} className="px-2 py-1 bg-green-100 text-green-700 rounded">Call</a>
                      <button onClick={() => editContact(c)} className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Edit</button>
                      {c.type !== "service" && (
                        <button onClick={() => removeContact(c.id)} className="px-2 py-1 bg-red-100 text-red-700 rounded">Del</button>
                      )}
                    </div>
                  </div>
                ))}
                <button onClick={addContact} className="flex items-center justify-center gap-2 border-dashed border-2 rounded-xl p-3 hover:bg-gray-50">
                  <Plus className="w-4 h-4" /> Add Contact
                </button>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <button className="px-3 py-2 rounded-lg bg-white border" disabled>
                  <ArrowLeft className="w-4 h-4 inline" /> Back
                </button>
                <button className="px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700" onClick={() => setWizardStep(1)}>
                  Next <ArrowRight className="w-4 h-4 inline" />
                </button>
              </div>
            </div>
          )}
          {wizardStep === 1 && (
            <div>
              <div className="text-lg font-semibold mb-2">Step 2: Create your Medical ID</div>
              <p className="text-sm text-gray-600 mb-4">These details appear on the Emergency screen.</p>
              <form className="grid md:grid-cols-2 gap-3" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Name</label>
                  <input className="w-full rounded-lg border px-3 py-2" value={medicalId.name}
                    onChange={(e) => setMedicalId((m) => ({ ...m, name: e.target.value }))} />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Blood Group</label>
                  <input className="w-full rounded-lg border px-3 py-2" value={medicalId.bloodGroup}
                    onChange={(e) => setMedicalId((m) => ({ ...m, bloodGroup: e.target.value }))} />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Allergies</label>
                  <input className="w-full rounded-lg border px-3 py-2" value={medicalId.allergies}
                    onChange={(e) => setMedicalId((m) => ({ ...m, allergies: e.target.value }))} />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Chronic Conditions</label>
                  <input className="w-full rounded-lg border px-3 py-2" value={medicalId.conditions}
                    onChange={(e) => setMedicalId((m) => ({ ...m, conditions: e.target.value }))} />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-600 mb-1">Emergency Note</label>
                  <textarea className="w-full rounded-lg border px-3 py-2" rows={3} value={medicalId.emergencyNote}
                    onChange={(e) => setMedicalId((m) => ({ ...m, emergencyNote: e.target.value }))} />
                </div>
              </form>
              <div className="mt-4 flex justify-between gap-2">
                <button className="px-3 py-2 rounded-lg bg-white border" onClick={() => setWizardStep(0)}>
                  <ArrowLeft className="w-4 h-4 inline" /> Back
                </button>
                <button className="px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700" onClick={() => setWizardStep(2)}>
                  Next <ArrowRight className="w-4 h-4 inline" />
                </button>
              </div>
            </div>
          )}
          {wizardStep === 2 && (
            <div>
              <div className="text-lg font-semibold mb-2">Step 3: Enable alerts & test</div>
              <p className="text-sm text-gray-600 mb-4">Allow notifications and try a test alert to ensure everything works.</p>
              <div className="flex flex-wrap gap-2">
                <button onClick={askNotificationPermission} className="px-3 py-2 rounded-lg bg-white border hover:bg-gray-50">
                  Enable Notifications
                </button>
                <button onClick={() => {screenFlash(); vibrate(); push("Test alert fired.", "success"); fireNotification("Test Alert", "This is only a test.");}} className="px-3 py-2 rounded-lg bg-white border hover:bg-gray-50">
                  Run Test Alert
                </button>
                <button onClick={scheduleSOS} className="px-3 py-2 rounded-lg bg-white border hover:bg-gray-50">
                  Schedule SOS (10s)
                </button>
              </div>
              <div className="mt-4 flex justify-between gap-2">
                <button className="px-3 py-2 rounded-lg bg-white border" onClick={() => setWizardStep(1)}>
                  <ArrowLeft className="w-4 h-4 inline" /> Back
                </button>
                <button className="px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700" onClick={() => setWizardStep(3)}>
                  Finish <ArrowRight className="w-4 h-4 inline" />
                </button>
              </div>
            </div>
          )}
          {wizardStep === 3 && (
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold">You're ready for emergencies.</div>
                <p className="text-sm text-gray-600">Use PANIC button, share location, and quick‑call contacts below.</p>
              </div>
              <button className="px-3 py-2 rounded-lg bg-white border hover:bg-gray-50" onClick={() => setWizardStep(0)}>
                Re‑run Setup
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Contacts */}
        <div className="md:col-span-2 bg-white border rounded-2xl shadow-sm p-4">
          <h2 className="text-xl font-semibold mb-3">Emergency Contacts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[...serviceContacts, ...personalContacts].map((c) => (
              <div key={c.id} className="flex items-center gap-3 bg-white rounded-xl border p-3">
                <div className="shrink-0">
                  {c.icon === "heart" ? (
                    <Heart className="text-red-500" />
                  ) : c.icon === "alert" ? (
                    <AlertTriangle className="text-orange-500" />
                  ) : (
                    <User className="text-blue-500" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate">{c.name}</p>
                  <p className="text-sm text-gray-500 truncate">{c.number}</p>
                </div>
                <div className="flex gap-2">
                  <a href={`tel:${c.number}`} className="px-2 py-1 bg-green-100 text-green-700 rounded">Call</a>
                  <button onClick={() => editContact(c)} className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Edit</button>
                  {c.type !== "service" && (
                    <button onClick={() => removeContact(c.id)} className="px-2 py-1 bg-red-100 text-red-700 rounded">Del</button>
                  )}
                </div>
              </div>
            ))}
            <button onClick={addContact} className="flex items-center justify-center gap-2 border-dashed border-2 rounded-xl p-3 hover:bg-gray-50">
              <Plus className="w-4 h-4" /> Add Contact
            </button>
          </div>
        </div>

        {/* Medical ID */}
        <div className="bg-white border rounded-2xl shadow-sm p-4">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2"><User /> My Medical ID</h2>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li><strong>Name:</strong> {medicalId.name}</li>
            <li><strong>Blood Group:</strong> {medicalId.bloodGroup}</li>
            <li><strong>Allergies:</strong> {medicalId.allergies}</li>
            <li><strong>Conditions:</strong> {medicalId.conditions}</li>
            {medicalId.emergencyNote && (<li><strong>Note:</strong> {medicalId.emergencyNote}</li>)}
          </ul>
          <button onClick={() => setMedicalOpen(true)} className="mt-3 px-3 py-2 rounded-lg bg-white border hover:bg-gray-50">Edit Medical ID</button>
        </div>
      </div>

      {/* Share Location */}
      <div className="mt-6 p-4 bg-white border rounded-2xl shadow-sm">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <MapPin /> Share Location
        </h2>
        <p className="text-gray-600 mt-1">Share your real‑time location with responders or family.</p>
        <div className="flex flex-wrap gap-2 mt-3">
          <button onClick={getLocation} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Get My Location</button>
          <button onClick={copyLocation} className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <Copy className="w-4 h-4" /> Copy Link
          </button>
          {locationLink && (
            <a href={locationLink} target="_blank" rel="noreferrer" className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">Open in Maps</a>
          )}
        </div>
        {locationLink && (
          <p className="mt-2 text-sm text-blue-600 break-words">{locationLink}</p>
        )}
      </div>

      {/* Panic Button */}
      <div className="mt-6">
        <button
          onClick={triggerPanic}
          className="w-full py-3 bg-red-600 text-white rounded-2xl font-bold text-lg hover:bg-red-700 shadow-lg"
        >
          🚨 PANIC BUTTON
        </button>
        <p className="text-xs text-gray-500 mt-2">All actions here run locally on your device. No data leaves your browser.</p>
      </div>

      {/* Edit Contact Modal */}
      <Modal
        open={!!editingContact}
        onClose={() => setEditingContact(null)}
        title={editingContact?.id ? "Save Contact" : "Add Contact"}
        footer={
          <div className="flex justify-end gap-2">
            <button className="px-3 py-2 rounded-lg bg-white border" onClick={() => setEditingContact(null)}>Cancel</button>
            <button className="px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700" onClick={saveContact}>Save</button>
          </div>
        }
      >
        {editingContact && (
          <form className="grid grid-cols-1 gap-3" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Name</label>
              <input className="w-full rounded-lg border px-3 py-2" value={editingContact.name}
                onChange={(e) => setEditingContact((c) => ({ ...c, name: e.target.value }))} required />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
              <input className="w-full rounded-lg border px-3 py-2" value={editingContact.number}
                onChange={(e) => setEditingContact((c) => ({ ...c, number: e.target.value }))} required />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Type</label>
              <select className="w-full rounded-lg border px-3 py-2" value={editingContact.type}
                onChange={(e) => setEditingContact((c) => ({ ...c, type: e.target.value }))}>
                <option value="personal">Personal</option>
                <option value="service">Service</option>
              </select>
            </div>
          </form>
        )}
      </Modal>

      {/* Edit Medical ID Modal */}
      <Modal
        open={medicalOpen}
        onClose={() => setMedicalOpen(false)}
        title="Edit Medical ID"
        footer={
          <div className="flex justify-end gap-2">
            <button className="px-3 py-2 rounded-lg bg-white border" onClick={() => setMedicalOpen(false)}>Close</button>
            <button className="px-3 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700" onClick={saveMedical}>Save</button>
          </div>
        }
      >
        <form className="grid md:grid-cols-2 gap-3" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input className="w-full rounded-lg border px-3 py-2" value={medicalId.name} onChange={(e) => setMedicalId((m) => ({ ...m, name: e.target.value }))} />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Blood Group</label>
            <input className="w-full rounded-lg border px-3 py-2" value={medicalId.bloodGroup} onChange={(e) => setMedicalId((m) => ({ ...m, bloodGroup: e.target.value }))} />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Allergies</label>
            <input className="w-full rounded-lg border px-3 py-2" value={medicalId.allergies} onChange={(e) => setMedicalId((m) => ({ ...m, allergies: e.target.value }))} />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Chronic Conditions</label>
            <input className="w-full rounded-lg border px-3 py-2" value={medicalId.conditions} onChange={(e) => setMedicalId((m) => ({ ...m, conditions: e.target.value }))} />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">Emergency Note</label>
            <textarea className="w-full rounded-lg border px-3 py-2" rows={3} value={medicalId.emergencyNote}
              onChange={(e) => setMedicalId((m) => ({ ...m, emergencyNote: e.target.value }))} />
          </div>
        </form>
      </Modal>

      {/* Toasts */}
      <ToastStack toasts={toasts} onClose={remove} />
    </div>
  );
}
