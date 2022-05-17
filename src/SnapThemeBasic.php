<?php declare(strict_types=1);

namespace SnapThemeBasic;

use Shopware\Core\Framework\Plugin;
use Shopware\Storefront\Framework\ThemeInterface;
use SnapThemeBasic\CustomFields\CustomFieldUpdater;


class SnapThemeBasic extends Plugin implements ThemeInterface
{
    public function getThemeConfigPath(): string
    {
        return 'theme.json';
    }
}