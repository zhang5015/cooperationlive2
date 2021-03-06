<?php

/**
 * PluginCooperationNoticeTable
 * 
 * This class has been auto-generated by the Doctrine ORM Framework
 */
class PluginCooperationNoticeTable extends Doctrine_Table
{
    static public $types = array(
    'full-time' => 'Full time',
    'part-time' => 'Part time',
    //    'freelance' => 'Freelance',
    'freelance' => 'Freelance'
    );

    public function getTypes()
    {
        return self::$types;
    }

    public function addActiveNoticesQuery(Doctrine_Query $q = null)
    {
        if (is_null($q))
        {
            $q = Doctrine_Query::create()
            ->from('CooperationNotice j');
        }

        $alias = $q->getRootAlias();

        $q->andWhere($alias . '.is_activated = ?', 1);

        return $q;

    }

    public function cleanup($days)
    {
        $q = $this->createQuery('a')
        ->delete()
        ->andWhere('a.is_activated = ?', 0)
        ->andWhere('a.created_at < ?', date('Y-m-d', time() - 86400 * $days));

        return $q->execute();
    }

    public function countActiveNotices(Doctrine_Query $q = null)
    {
        return $this->addActiveNoticesQuery($q)->count();
    }

    public function getActiveNotices(Doctrine_Query $q = null)
    {
        return $this->addActiveNoticesQuery($q)->execute();
    }

    public function getForToken(array $parameters)
    {
        $affiliate = Doctrine_Core::getTable('CooperationAffiliate') ->findOneByToken($parameters['token']);
        if (!$affiliate || !$affiliate->getIsActive())
        {
            throw new sfError404Exception(sprintf('Affiliate with token "%s" does not exist or is not activated.', $parameters['token']));
        }

        return $affiliate->getActiveNotices();
    }

    public function getLatestPost()
    {
        $q = Doctrine_Query::create()->from('CooperationNotice j');

        $this->addActiveNoticesQuery($q);

        return $q->fetchOne();
    }

    public function retrieveActiveNotice(Doctrine_Query $q)
    {
        return $this->addActiveNoticesQuery($q)->fetchOne();
    }

    public function retrieveBackendNoticeList(Doctrine_Query $q)
    {
        $rootAlias = $q->getRootAlias();

        $q->leftJoin($rootAlias . '.CooperationCategory c');

        return $q;
    }

    static public function getLuceneIndex()
    {
        ProjectConfiguration::registerZend();

        if (file_exists($index = self::getLuceneIndexFile()))
        {
            return Zend_Search_Lucene::open($index);
        }

        return Zend_Search_Lucene::create($index);
    }

    static public function getLuceneIndexFile()
    {
        return sfConfig::get('sf_data_dir').'/notice.'.sfConfig::get('sf_environment').'.index';
    }

    public function getForLuceneQuery($query)
    {
        $hits = self::getLuceneIndex()->find($query);

        $pks = array();
        foreach ($hits as $hit)
        {
            $pks[] = $hit->pk;
        }

        if (empty($pks))
        {
            return array();
        }

        $q = $this->createQuery('j')
        ->whereIn('j.id', $pks)
        ->limit(20);

        $q = $this->addActiveNoticesQuery($q);

        return $q->execute();
    }
    }