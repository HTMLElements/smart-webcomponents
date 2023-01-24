<template>
  <div class="vue-root">
    <div
      class="demo-description"
    >smartDropDownButton allows you to display any type of content in a Drop-down.</div>
    <smart-drop-down-button drop-down-width="auto" placeholder="Calendar">
      <smart-calendar></smart-calendar>
    </smart-drop-down-button>
    <smart-drop-down-button drop-down-width="auto" placeholder="ListMenu">
      <smart-list-menu></smart-list-menu>
    </smart-drop-down-button>
    <smart-drop-down-button placeholder="Buttons">
      <smart-button>Button</smart-button>
      <smart-switch-button>Switch Button</smart-switch-button>
    </smart-drop-down-button>
    <smart-drop-down-button placeholder="Text">
      What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
      and typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it to make a type specimen book. It has survived
      not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the
      release of Letraset sheets containing Lorem Ipsum passages, and more recently
      with desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.
    </smart-drop-down-button>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.calendar.js";
import "smart-webcomponents/source/modules/smart.dropdownbutton.js";
import "smart-webcomponents/source/modules/smart.listmenu.js";
import "smart-webcomponents/source/modules/smart.switchbutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const listMenuDataSource = [
        {
          label: "OSI",
          items: [
            {
              label: "Application Layer",
              items: [
                {
                  label: "SIP"
                },
                {
                  label: "DNS"
                },
                {
                  label: "FTP"
                },
                {
                  label: "RTP"
                },
                {
                  label: "DHCP"
                }
              ]
            },
            {
              label: "Presentation Layer",
              items: [
                {
                  label: "SSL"
                },
                {
                  label: "TLS"
                }
              ]
            },
            {
              label: "Session Layer",
              items: [
                {
                  label: "NetBIOS"
                },
                {
                  label: "SPDY"
                }
              ]
            },
            {
              label: "Transport Layer",
              items: [
                {
                  label: "TCP"
                },
                {
                  label: "UDP"
                },
                {
                  label: "SCTP"
                }
              ]
            },
            {
              label: "Network Layer",
              items: [
                {
                  label: "IP"
                },
                {
                  label: "ARP"
                },
                {
                  label: "ICMP"
                }
              ]
            },
            {
              label: "Data Link Layer",
              items: [
                {
                  label: "ATM"
                },
                {
                  label: "SDLS"
                },
                {
                  label: "LLC"
                }
              ]
            },
            {
              label: "Physical Layer",
              items: [
                {
                  label: "EIA/TIA-232"
                },
                {
                  label: "ITU-T V-Series"
                },
                {
                  label: "DSL"
                }
              ]
            }
          ]
        },
        {
          label: "TCP/IP",
          items: [
            {
              label: "Application Layer",
              items: [
                {
                  label: "DHCP"
                },
                {
                  label: "DNS"
                },
                {
                  label: "FTP"
                },
                {
                  label: "HTTP"
                },
                {
                  label: "IMAP"
                },
                {
                  label: "LDAP"
                },
                {
                  label: "XMPP"
                },
                {
                  label: "SSH"
                },
                {
                  label: "RIP"
                }
              ]
            },
            {
              label: "Transport Layer",
              items: [
                {
                  label: "TCP"
                },
                {
                  label: "UDP"
                },
                {
                  label: "SCTP"
                }
              ]
            },
            {
              label: "Internet Layer",
              items: [
                {
                  label: "IP"
                },
                {
                  label: "ICMP"
                },
                {
                  label: "ECN"
                }
              ]
            },
            {
              label: "Link Layer",
              items: [
                {
                  label: "ARP"
                },
                {
                  label: "NDP"
                },
                {
                  label: "DSL"
                }
              ]
            }
          ]
        }
      ];
      document.querySelector("smart-list-menu").dataSource = listMenuDataSource;
    });
  }
};
</script>

<style>
smart-drop-down-button {
  --smart-drop-down-element-max-height: 300px;
  width: 200px;
}

smart-drop-down-button smart-calendar,
smart-drop-down-button smart-calendar:focus {
  border: none;
}

smart-drop-down-button smart-list-menu {
  border: none;
  height: 200px;
}
smart-list-menu {
  width: 300px;
}
</style>
