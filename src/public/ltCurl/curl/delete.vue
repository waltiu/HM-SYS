<template>
  <div></div>
</template>

<script>
export default {
  name: "delete",
  props: {
    deleteInfo: Array,
    type: String
  },
  watch: {
    deleteInfo: function (newVal) {
      this.$confirm("此操作将永久已选择的数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http.post(`/api/source/${this.type}Delete`, this.deleteInfo)
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.$emit("reload");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "您已取消该操作！"
          });
          this.$emit("reload");
        });
    }
  }
};
</script>

<style></style>
