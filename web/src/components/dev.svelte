<script lang="ts">
  import { Bug, Sun, Moon } from "lucide-svelte";
  import * as DropdownMenu from "@/components/ui/dropdown-menu";
  import { Button } from "@/components/ui/button/index";
  import { toggleMode } from "mode-watcher";
  import { VISIBLE } from "@/stores/phone";
  import { sendNotification } from "@/stores/notifications";

  function toggleVisibility() {
    VISIBLE.set(!$VISIBLE);
  }

  function testNotification() {
    sendNotification({
      title: "Test Notification",
      body: "This is a test notification",
      app: "bleeter"
    });
  }
</script>

<div class="absolute top-0 left-0 m-2 flex gap-2">
  <Button on:click={toggleMode} variant="outline" size="icon" class="w-8 h-8">
      <Sun
       class="w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
       class="absolute w-4 h-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span class="sr-only">Toggle theme</span>
  </Button>
  <DropdownMenu.Root closeOnItemClick={false}>
    <DropdownMenu.Trigger class="flex items-center justify-center w-8 h-8 border rounded-lg">
      <Bug class="w-4 h-4" />
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Group>
        <DropdownMenu.Item on:click={toggleVisibility}>Toggle visibility</DropdownMenu.Item>
        <DropdownMenu.Item on:click={testNotification}>Test notification</DropdownMenu.Item>
      </DropdownMenu.Group>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</div>
