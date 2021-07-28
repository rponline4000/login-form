const defaultFields = {
  email: '',
  password: '',
  remember: false };


new Vue({
  el: '#login-form',
  data: {
    hasErrors: false,
    passwordIsText: false,
    isLoading: false,
    isSuccess: false,
    fields: {
      ...defaultFields } },


  methods: {
    submitLogin() {
      this.isLoading = true;
      axios.post(
      '#',
      {
        ...this.fields }).


      then(() => {
        this.isLoading = false;
        this.isSuccess = true;
        this.fields = {
          ...defaultFields };

      }).
      catch(() => {
        this.isLoading = false;
        this.hasErrors = true;
      });
    } } });