<template>
    <div>
        <!--Divider-->
        <hr class="my-3">
        <!--Heading-->
        <h6 class="navbar-heading text-muted">{{ link.name }}</h6>
    </div>
</template>
<script>
  export default {
    name: 'sidebar-divider',
    props: {
      link: {
        type: Object,
        default: () => {
          return {
            name: '',
          };
        },
        description:
          'Sidebar Divider. Divider can contain a name.'
      }
    },
  };
</script>
