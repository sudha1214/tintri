describe("Check if component is defined", function() {

    beforeEach(module("myApp"));
  
    var ctrl;
    var cardDetails ={
      currentStatus: 'ERROR',
      name:"Critical Vms",
      description : "All my business-critical Vms",
      path  : "/TINTRI/CRITICAL-VMS",
      virtualMachines : 16,
      errors : 2
  }
  beforeEach(inject(function($componentController){
    ctrl = $componentController('cardComponent', null, {details: cardDetails});
  }));
  it("should have bind to the cardDetails", function() {
      expect(ctrl.details).toBeDefined();
    });
    it('Name Should be "Critical Vms"',function() {
      expect(ctrl.details.name).toEqual("Critical Vms");
    });
    it('should match with the details object', function() {
      expect(ctrl.details).toEqual(jasmine.objectContaining(cardDetails));
    });
    it('should match all the passed values',function() {
      expect(ctrl.details.currentStatus).toEqual(cardDetails.currentStatus);
      expect(ctrl.details.name).toEqual(cardDetails.name);
      expect(ctrl.details.description).toEqual(cardDetails.description);
      expect(ctrl.details.path).toEqual(cardDetails.path);
      expect(ctrl.details.virtualMachines).toEqual(cardDetails.virtualMachines);
      expect(ctrl.details.errors).toEqual(cardDetails.errors);
    });
  });