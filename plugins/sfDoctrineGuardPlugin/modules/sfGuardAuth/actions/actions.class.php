<?php

/*
 * This file is part of the symfony package.
 * (c) 2004-2006 Fabien Potencier <fabien.potencier@symfony-project.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

require_once(dirname(__FILE__).'/../lib/BasesfGuardAuthActions.class.php');

/**
 *
 * @package    symfony
 * @subpackage plugin
 * @author     Fabien Potencier <fabien.potencier@symfony-project.com>
 * @version    SVN: $Id: actions.class.php 23319 2009-10-25 12:22:23Z Kris.Wallsmith $
 */
class sfGuardAuthActions extends BasesfGuardAuthActions
{
	public function executeMobile(sfWebRequest $request)
	{
		$username = $request->getParameter("username");
		$password = $request->getParameter("password");

		if(!$username) $username="xiaohua";
		$returnValue = Array(
            "user",
		$username
		);
		echo   json_encode($returnValue);
		//		$response->setContentType("text/json;charset=UTF-8");
		//		$response->setContent(json_encode($returnValue));
		//		return $response;
		////		return json_encode($returnValue);
		return sfView::NONE;
	}
}
