import express from 'express';
import ViteExpress from 'vite-express';
import 'dotenv/config';

const API_BASE_URL = process.env.API_BASE_URL;

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

app.get("/api/vms", (req, res) => {
  const url = `http://${API_BASE_URL}/vms`;
  res.json({"vms":[{"name":"wordpress-be","cpu":4,"memory":"16Gi","created_at":"2024-06-18T16:59:43Z","os":"windows2k22","disks":[{"bootOrder":1,"disk":{"bus":"scsi"},"name":"rootdisk"},{"bootOrder":2,"cdrom":{"bus":"sata","readonly":true,"tray":"closed"},"name":"installation-cdrom"},{"cdrom":{"bus":"sata","readonly":true,"tray":"closed"},"name":"windows-drivers-disk"},{"cdrom":{"bus":"sata","readonly":true,"tray":"closed"},"name":"sysprep"}],"interfaces":[{"bridge":{},"model":"e1000e","name":"podnet","ports":[{"name":"rdp","port":3389,"protocol":"TCP"}]},{"bridge":{},"macAddress":"02:a7:e0:00:00:05","model":"virtio","name":"nic-jade-grasshopper-65"}],"machine_type":"pc-q35-rhel9.2.0"},{"name":"wordpress-be","cpu":2,"memory":"16Gi","created_at":"2024-06-13T20:41:52Z","os":"windows2k22","disks":[{"bootOrder":1,"disk":{"bus":"scsi"},"name":"rootdisk"},{"bootOrder":3,"cdrom":{"bus":"sata","readonly":true,"tray":"closed"},"name":"windows-drivers-disk"}],"interfaces":[{"bridge":{},"macAddress":"02:a7:e0:00:00:46","model":"virtio","name":"airgap"},{"bridge":{},"macAddress":"02:a7:e0:00:00:47","model":"virtio","name":"labnet"},{"macAddress":"02:a7:e0:00:00:04","masquerade":{},"model":"e1000e","name":"podnet"}],"machine_type":"pc-q35-rhel9.2.0"},{"name":"rhel9","cpu":4,"memory":"8Gi","created_at":"2024-06-12T14:53:22Z","os":"rhel9","disks":[{"bootOrder":1,"disk":{"bus":"scsi"},"name":"rootdisk"},{"bootOrder":2,"disk":{"bus":"virtio"},"name":"cloudinitdisk"}],"interfaces":[{"bridge":{},"macAddress":"02:a7:e0:00:00:48","model":"e1000e","name":"nic-labnet"}],"machine_type":"pc-q35-rhel9.2.0"},{"name":"fedora-purple-moose-74","cpu":1,"memory":"2Gi","created_at":"2024-06-20T15:33:14Z","os":"fedora","disks":[{"disk":{"bus":"virtio"},"name":"rootdisk"},{"disk":{"bus":"virtio"},"name":"cloudinitdisk"}],"interfaces":[{"macAddress":"02:a7:e0:00:00:0c","masquerade":{},"model":"virtio","name":"default"}],"machine_type":"pc-q35-rhel9.2.0"}]});
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
