<td colspan="6">
  <?php echo __('%%is_activated%% <small>%%CooperationCategory%%</small> - %%company%% (<em>%%email%%</em>) is looking for a %%position%% (%%location%%)', array('%%is_activated%%' => $cooperation_notice->getIsActivated(), '%%CooperationCategory%%' => $cooperation_notice->getCooperationCategory(), '%%company%%' => $cooperation_notice->getCompany(), '%%email%%' => $cooperation_notice->getEmail(), '%%position%%' => link_to($cooperation_notice->getPosition(), 'cooperation_notice_edit', $cooperation_notice), '%%location%%' => $cooperation_notice->getLocation()), 'messages') ?>
</td>