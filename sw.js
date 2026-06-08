/**
 * Service Worker minimal — Suivi CA Narbonne
 *
 * Cette première version :
 *  - Permet à l'app d'être installable comme PWA (icône sur l'écran d'accueil)
 *  - Ne cache rien pour l'instant (toutes les requêtes passent au réseau)
 *  - Sera enrichi plus tard pour le mode offline + queue de saisies
 *
 * Pour incrémenter la version (ex. v2), changer SW_VERSION et le navigateur
 * forcera la mise à jour du Service Worker.
 */

const SW_VERSION = 'v1.0.0';

self.addEventListener('install', (event) => {
  console.log('[SW] Install', SW_VERSION);
  // Activation immédiate (sans attendre la fermeture des onglets existants)
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[SW] Activate', SW_VERSION);
  // Prise de contrôle des pages déjà ouvertes
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass-through : on laisse la requête aller au réseau sans intercepter
  // Le mode offline avec mise en cache sera ajouté ultérieurement
  return;
});
