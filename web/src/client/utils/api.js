export const fetchVms = async() => {
  const response = await fetch('/api/vms');
  const resp = await response.json();
  return resp['vms'];
}

export const fetchNodes = async() => {
  const response = await fetch('/api/nodes');
  const resp = await response.json();
  return resp['nodes'];
}

export const fetchStorages = async() => {
  return [
    {
      "name": "rhel-9-rbz-volume",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "rhel-9-rbz",
          "uid": "8b5e5469-8f02-40f5-8c50-7ebaeeb92200"
        }
      ],
      "source": {
        "pvc": {
          "name": "rhel9-6c486c3e5f8c",
          "namespace": "openshift-virtualization-os-images"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "32212254720"
          }
        },
        "storageClassName": "odf-hdd-3-replicas"
      }
    },
    {
      "name": "wordpress-be",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "wordpress-be",
          "uid": "37e42bf1-05cf-44a9-b80b-c33b9cbfc993"
        }
      ],
      "source": {
        "blank": {

        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "120Gi"
          }
        }
      }
    },
    {
      "name": "wordpress-be-installation-cdrom",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "wordpress-be",
          "uid": "37e42bf1-05cf-44a9-b80b-c33b9cbfc993"
        }
      ],
      "source": {
        "http": {
          "url": "http://rhdata6.dota-lab.iad.redhat.com/win2022.iso"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "20Gi"
          }
        }
      }
    },
    {
      "name": "rhel8-hungry-ox",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "rhel8-hungry-ox",
          "uid": "39b3fb9c-6cdb-4268-a119-f1c8621a7a54"
        }
      ],
      "source": {
        "snapshot": {
          "name": "rhel8-ae939d3340a7",
          "namespace": "openshift-virtualization-os-images"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "30Gi"
          }
        }
      }
    },
    {
      "name": "test-3eeafbcb-7462-4a20-b5e5-cc89547faa30-vqfs5",
      "vm": null,
      "source": {
        "http": {
          "certConfigMap": "test-3eeafbcb-7462-4a20-b5e5-cc89547faa30-t72wn",
          "secretExtraHeaders": [
            "test-3eeafbcb-7462-4a20-b5e5-cc89547faa30-fl4kq"
          ],
          "url": "https://virt-exportproxy-openshift-cnv.apps.tacos.dota-lab.iad.redhat.com/api/export.kubevirt.io/v1alpha1/namespaces/fouladi/virtualmachineexports/rhel9-uncomfortable-rat/volumes/rhel9-uncomfortable-rat/disk.img.gz"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "32212254720"
          }
        },
        "storageClassName": "odf-hdd-3-replicas"
      }
    },
    {
      "name": "rhel9-uncomfortable-rat",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "rhel9-uncomfortable-rat",
          "uid": "3eeafbcb-7462-4a20-b5e5-cc89547faa30"
        }
      ],
      "source": {
        "pvc": {
          "name": "rhel9-b2c52ac49e20",
          "namespace": "openshift-virtualization-os-images"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "30Gi"
          }
        }
      }
    },
    {
      "name": "rhel-8-distant-beetle-volume",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "rhel-8-distant-beetle",
          "uid": "4b53277b-bd3a-4f21-bc9e-74006a0c6473"
        }
      ],
      "source": {
        "pvc": {
          "name": "rhel8-14313b7f990e",
          "namespace": "openshift-virtualization-os-images"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "32212254720"
          }
        },
        "storageClassName": "odf-hdd-3-replicas"
      }
    },
    {
      "name": "rhel9-workstation-volume",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "rhel9-workstation",
          "uid": "da001b4e-e802-4d49-8252-1c3fe9fe18d7"
        }
      ],
      "source": {
        "pvc": {
          "name": "rhel9-b2c52ac49e20",
          "namespace": "openshift-virtualization-os-images"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "32212254720"
          }
        },
        "storageClassName": "odf-hdd-3-replicas"
      }
    },
    {
      "name": "win10-nursing-chameleon",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "win10-nursing-chameleon",
          "uid": "09f4b86d-328d-4f1f-9b75-471d7a8e0789"
        }
      ],
      "source": {
        "blank": {

        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "60Gi"
          }
        },
        "storageClassName": "odf-hdd-3-replicas"
      }
    },
    {
      "name": "win10-nursing-chameleon-installation-cdrom",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "win10-nursing-chameleon",
          "uid": "09f4b86d-328d-4f1f-9b75-471d7a8e0789"
        }
      ],
      "source": {
        "http": {
          "url": "http://rhdata6/win10.iso"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "30Gi"
          }
        }
      }
    },
    {
      "name": "win11-amazing-emu",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "win11-amazing-emu",
          "uid": "2a34f1a1-ab71-4942-8dc9-9f688661e03d"
        }
      ],
      "source": {
        "blank": {

        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "80Gi"
          }
        }
      }
    },
    {
      "name": "win11-amazing-emu-installation-cdrom",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "win11-amazing-emu",
          "uid": "2a34f1a1-ab71-4942-8dc9-9f688661e03d"
        }
      ],
      "source": {
        "http": {
          "url": "http://rhdata6/win11.iso"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "30Gi"
          }
        }
      }
    },
    {
      "name": "win11-workstation",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "win11-workstation",
          "uid": "5d2ca03a-b321-42ba-95e6-c7008ea82386"
        }
      ],
      "source": {
        "blank": {

        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "80Gi"
          }
        },
        "storageClassName": "vm-odf-nvme-2-replicas"
      }
    },
    {
      "name": "win11-workstation-installation-cdrom",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "win11-workstation",
          "uid": "5d2ca03a-b321-42ba-95e6-c7008ea82386"
        }
      ],
      "source": {
        "http": {
          "url": "http://rhdata6/win11.iso"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "20Gi"
          }
        },
        "storageClassName": "vm-odf-nvme-2-replicas"
      }
    },
    {
      "name": "wordpress-be",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "wordpress-be",
          "uid": "94d5e3a0-4ba5-4bc1-a95b-cbf46149e51b"
        }
      ],
      "source": {
        "blank": {

        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "100Gi"
          }
        },
        "storageClassName": "vm-odf-nvme-2-replicas"
      }
    },
    {
      "name": "wordpress-be-installation-cdrom",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "wordpress-be",
          "uid": "94d5e3a0-4ba5-4bc1-a95b-cbf46149e51b"
        }
      ],
      "source": {
        "http": {
          "url": "http://rhdata6.dota-lab.iad.redhat.com/win2022.iso"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "6Gi"
          }
        },
        "storageClassName": "vm-odf-nvme-2-replicas"
      }
    },
    {
      "name": "wordpress-logs-volume",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "wordpress-logs",
          "uid": "b4108b35-be25-4e56-9093-1efed4b79588"
        }
      ],
      "source": {
        "pvc": {
          "name": "rhel9-b2c52ac49e20",
          "namespace": "openshift-virtualization-os-images"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "32212254720"
          }
        },
        "storageClassName": "odf-hdd-3-replicas"
      }
    },
    {
      "name": "jcall-inl-9fca60cef683595c2f53908a799e8e502086-8fkjx",
      "vm": null,
      "source": {
        "blank": {

        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "100Gi"
          }
        },
        "storageClassName": "vm-odf-hdd-3-replicas"
      }
    },
    {
      "name": "jcall-win10-plan-vm-16063-6clx4",
      "vm": null,
      "source": {
        "vddk": {
          "backingFile": "[nfs-nvme-rhdata6] win10/win10.vmdk",
          "initImageURL": "quay.io/allenfouladi/vddk:8.0.2",
          "secretRef": "jcall-win10-plan-vm-16063-5xp7n",
          "thumbprint": "C1:1D:0B:EF:54:8E:AF:B9:EB:B4:F8:6B:51:49:40:20:83:A1:52:88",
          "url": "https://vcenter.dota-lab.iad.redhat.com/sdk",
          "uuid": "42022a1a-d2ad-8e26-bb79-b8900cb51450"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "100Gi"
          }
        },
        "storageClassName": "vm-odf-nvme-2-replicas"
      }
    },
    {
      "name": "jcall-win10-plan-vm-16063-6tcdr",
      "vm": null,
      "source": {
        "vddk": {
          "backingFile": "[nfs-nvme-rhdata6] win10/win10.vmdk",
          "initImageURL": "quay.io/allenfouladi/vddk:8.0.2",
          "secretRef": "jcall-win10-plan-vm-16063-cjkbv",
          "thumbprint": "C1:1D:0B:EF:54:8E:AF:B9:EB:B4:F8:6B:51:49:40:20:83:A1:52:88",
          "url": "https://vcenter.dota-lab.iad.redhat.com/sdk",
          "uuid": "42022a1a-d2ad-8e26-bb79-b8900cb51450"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "100Gi"
          }
        },
        "storageClassName": "vm-odf-nvme-2-replicas"
      }
    },
    {
      "name": "rhel9",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "rhel9",
          "uid": "10757dad-6f62-4e06-8784-0a42a6604259"
        }
      ],
      "source": {
        "pvc": {
          "name": "rhel9-6c486c3e5f8c",
          "namespace": "openshift-virtualization-os-images"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "30Gi"
          }
        },
        "storageClassName": "vm-odf-nvme-2-replicas"
      }
    },
    {
      "name": "test-v2v-da0f6d15-bbad-4cf9-8ea0-0c4dda6d79e2-z5vvw",
      "vm": null,
      "source": {
        "http": {
          "certConfigMap": "test-v2v-da0f6d15-bbad-4cf9-8ea0-0c4dda6d79e2-jzvzg",
          "secretExtraHeaders": [
            "test-v2v-da0f6d15-bbad-4cf9-8ea0-0c4dda6d79e2-j6bmh"
          ],
          "url": "https://virt-exportproxy-openshift-cnv.apps.tacos.dota-lab.iad.redhat.com/api/export.kubevirt.io/v1alpha1/namespaces/jkincl/virtualmachineexports/rhel8-influential-halibut/volumes/rhel8-influential-halibut/disk.img.gz"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "32212254720"
          }
        },
        "storageClassName": "vm-odf-hdd-3-replicas"
      }
    },
    {
      "name": "win11",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "win11",
          "uid": "4f7fac88-8911-4116-948a-e3cf1ab0a931"
        }
      ],
      "source": {
        "blank": {

        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "100Gi"
          }
        },
        "storageClassName": "vm-odf-nvme-2-replicas"
      }
    },
    {
      "name": "win11-installation-cdrom",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "win11",
          "uid": "4f7fac88-8911-4116-948a-e3cf1ab0a931"
        }
      ],
      "source": {
        "pvc": {
          "name": "win11-iso",
          "namespace": "jcall"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "7Gi"
          }
        }
      }
    },
    {
      "name": "rhel8-influential-halibut",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "rhel8-influential-halibut",
          "uid": "da0f6d15-bbad-4cf9-8ea0-0c4dda6d79e2"
        }
      ],
      "source": {
        "pvc": {
          "name": "rhel8-14313b7f990e",
          "namespace": "openshift-virtualization-os-images"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "30Gi"
          }
        }
      }
    },
    {
      "name": "rhel9-monetary-moose",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "rhel9-monetary-moose",
          "uid": "6cf44ce8-51e6-4a15-ad70-b66225717e52"
        }
      ],
      "source": {
        "snapshot": {
          "name": "rhel9-b2c52ac49e20",
          "namespace": "openshift-virtualization-os-images"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "30Gi"
          }
        }
      }
    },
    {
      "name": "rhel9-suspicious-cattle",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "rhel9-suspicious-cattle",
          "uid": "dcbfb37e-7dc3-4677-892f-bc82367e99f5"
        }
      ],
      "source": {
        "pvc": {
          "name": "rhel9-6c486c3e5f8c",
          "namespace": "openshift-virtualization-os-images"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "30Gi"
          }
        },
        "storageClassName": "vm-odf-nvme-2-replicas"
      }
    },
    {
      "name": "win10-clinical-echidna",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "win10-clinical-echidna",
          "uid": "3e86eb93-68e8-45f8-84cf-a833832ce2d1"
        }
      ],
      "source": {
        "blank": {

        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "60Gi"
          }
        },
        "storageClassName": "vm-odf-hdd-3-replicas"
      }
    },
    {
      "name": "win10-clinical-echidna-installation-cdrom",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "win10-clinical-echidna",
          "uid": "3e86eb93-68e8-45f8-84cf-a833832ce2d1"
        }
      ],
      "source": {
        "pvc": {
          "name": "win10-iso",
          "namespace": "jkincl"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "10Gi"
          }
        }
      }
    },
    {
      "name": "win10-iso",
      "vm": null,
      "source": {
        "http": {
          "url": "http://rhdata6.dota-lab.iad.redhat.com/win10.iso"
        }
      },
      "storage": null
    },
    {
      "name": "rhel9-mac1",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "rhel9-mac1",
          "uid": "d200f23d-7b54-4e02-99ba-897dee498dd4"
        }
      ],
      "source": {
        "snapshot": {
          "name": "rhel9-94b6d5cbf27a",
          "namespace": "openshift-virtualization-os-images"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "30Gi"
          }
        }
      }
    },
    {
      "name": "rhel8-vm",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "rhel8-vm",
          "uid": "412df1f1-927e-40df-b61f-d0c0e4101bbc"
        }
      ],
      "source": {
        "snapshot": {
          "name": "rhel8-15728c1d93e3",
          "namespace": "openshift-virtualization-os-images"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "30Gi"
          }
        }
      }
    },
    {
      "name": "centos-stream8-5408793bd6de",
      "vm": null,
      "source": {
        "registry": {
          "pullMethod": "node",
          "url": "docker://quay.io/containerdisks/centos-stream@sha256:5408793bd6def2124f53568badf512c1d505c1f3613aa97fe18edffc1fda9638"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "30Gi"
          }
        }
      }
    },
    {
      "name": "centos-stream8-72755144b16b",
      "vm": null,
      "source": {
        "registry": {
          "pullMethod": "node",
          "url": "docker://quay.io/containerdisks/centos-stream@sha256:72755144b16bbb2e134e788a3aede2161e33b5f85655d926ca24b5e83e70ebd7"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "30Gi"
          }
        }
      }
    },
    {
      "name": "centos-stream9-0eb2ffe5ec22",
      "vm": null,
      "source": {
        "registry": {
          "pullMethod": "node",
          "url": "docker://quay.io/containerdisks/centos-stream@sha256:0eb2ffe5ec22f4eeed63548477554655743b5f7bba6365479e4f436ac4829bcd"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "30Gi"
          }
        }
      }
    },
    {
      "name": "centos-stream9-f5ca5e822eff",
      "vm": null,
      "source": {
        "registry": {
          "pullMethod": "node",
          "url": "docker://quay.io/containerdisks/centos-stream@sha256:f5ca5e822effa858239b402943af362c29172a8394a4224d7d0de9099d35e653"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "30Gi"
          }
        }
      }
    },
    {
      "name": "rhel9-6c486c3e5f8c",
      "vm": null,
      "source": {
        "registry": {
          "pullMethod": "node",
          "url": "docker://registry.redhat.io/rhel9/rhel-guest-image@sha256:6c486c3e5f8c9d7f55ff69099f57275ac7f6d6c1b069333e20bb03eee043a21a"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "30Gi"
          }
        }
      }
    },
    {
      "name": "rhel9-test",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "rhel9-test",
          "uid": "4336543e-1108-424e-8c02-9128cbd609c6"
        }
      ],
      "source": {
        "pvc": {
          "name": "rhel9-b2c52ac49e20",
          "namespace": "openshift-virtualization-os-images"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "30Gi"
          }
        }
      }
    },
    {
      "name": "rhel9-national-antelope",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "rhel9-national-antelope",
          "uid": "d7254eab-e67a-4556-a0d0-fce96620f9d8"
        }
      ],
      "source": {
        "snapshot": {
          "name": "rhel9-94b6d5cbf27a",
          "namespace": "openshift-virtualization-os-images"
        }
      },
      "storage": {
        "accessModes": [
          "ReadWriteMany"
        ],
        "resources": {
          "requests": {
            "storage": "30Gi"
          }
        },
        "storageClassName": "odf-nvme-2-replicas",
        "volumeMode": "Block"
      }
    },
    {
      "name": "rhel9-open-pheasant-nfs",
      "vm": [
        {
          "apiVersion": "kubevirt.io/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "VirtualMachine",
          "name": "rhel9-open-pheasant-nfs",
          "uid": "90f2ebea-5762-42b1-bf55-7a96f618fc50"
        }
      ],
      "source": {
        "snapshot": {
          "name": "rhel9-94b6d5cbf27a",
          "namespace": "openshift-virtualization-os-images"
        }
      },
      "storage": {
        "resources": {
          "requests": {
            "storage": "30Gi"
          }
        },
        "storageClassName": "nfs-csi"
      }
    }
  ];
  // const response = await fetch('/api/storages');
  // const resp = await response.json();
  // return resp['storages'];
}
