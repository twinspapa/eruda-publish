<?php

// autoload_real.html @generated by Composer

class ComposerAutoloaderInit764e13b4e015aaf58c5d047b0a4697bd
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.html';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.html';

        spl_autoload_register(array('ComposerAutoloaderInit764e13b4e015aaf58c5d047b0a4697bd', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(\dirname(__FILE__)));
        spl_autoload_unregister(array('ComposerAutoloaderInit764e13b4e015aaf58c5d047b0a4697bd', 'loadClassLoader'));

        $useStaticLoader = PHP_VERSION_ID >= 50600 && !defined('HHVM_VERSION') && (!function_exists('zend_loader_file_encoded') || !zend_loader_file_encoded());
        if ($useStaticLoader) {
            require __DIR__ . '/autoload_static.html';

            call_user_func(\Composer\Autoload\ComposerStaticInit764e13b4e015aaf58c5d047b0a4697bd::getInitializer($loader));
        } else {
            $map = require __DIR__ . '/autoload_namespaces.html';
            foreach ($map as $namespace => $path) {
                $loader->set($namespace, $path);
            }

            $map = require __DIR__ . '/autoload_psr4.html';
            foreach ($map as $namespace => $path) {
                $loader->setPsr4($namespace, $path);
            }

            $classMap = require __DIR__ . '/autoload_classmap.html';
            if ($classMap) {
                $loader->addClassMap($classMap);
            }
        }

        $loader->register(true);

        if ($useStaticLoader) {
            $includeFiles = Composer\Autoload\ComposerStaticInit764e13b4e015aaf58c5d047b0a4697bd::$files;
        } else {
            $includeFiles = require __DIR__ . '/autoload_files.html';
        }
        foreach ($includeFiles as $fileIdentifier => $file) {
            composerRequire764e13b4e015aaf58c5d047b0a4697bd($fileIdentifier, $file);
        }

        return $loader;
    }
}

function composerRequire764e13b4e015aaf58c5d047b0a4697bd($fileIdentifier, $file)
{
    if (empty($GLOBALS['__composer_autoload_files'][$fileIdentifier])) {
        require $file;

        $GLOBALS['__composer_autoload_files'][$fileIdentifier] = true;
    }
}
