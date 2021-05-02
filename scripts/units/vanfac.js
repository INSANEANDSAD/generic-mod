Events.on(ContentInitEvent, () => {
  const speed = Vars.content.getByName(ContentType.unit, "name-speed");
  Blocks.groundFactory.plans.addAll(
    new UnitFactory.UnitPlan(speed, 1250, ItemStack.with(Items.titanium, 10, Items.silicon, 20))
  );
  Blocks.groundFactory.init();
});
