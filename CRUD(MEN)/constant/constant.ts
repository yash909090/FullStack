export class Constant{
   public static FullNameRegex = /^([a-zA-Z ]{2,40})$/;
   public static emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   public static mobileRegex = /^([0-9]{10})$/;
   public static cityRegex = /^([a-zA-Z]{2,40})$/;
   public static ageRegex = /^([0-9]{1,2})$/;
   public static salaryRegex = /^([0-9]{3,10})$/;
}