#!/usr/bin/env python
# -*- coding: utf-8 -*-

try:
    from setuptools import setup, find_packages
except ImportError:
    import ez_setup
    ez_setup.use_setuptools()
    from setuptools import setup, find_packages

VERSION = __import__('colorbox').__version__

import os
def read(fname):
    return open(os.path.join(os.path.dirname(__file__), fname)).read()

setup(
    name ='coop-colorbox',
    version = VERSION,
    description ='Manage lightboxes within coop-cms',
    long_description = open('README.rst').read(),
    packages = ['colorbox'],
    include_package_data = True,
    author = 'Luc Jean',
    author_email = 'ljean@apidev.fr',
    license ='BSD',
    url = "https://github.com/quinode/coop-colorbox/",
    download_url = "https://github.com/quinode/coop-colorbox/tarball/master",
    zip_safe = False,
    classifiers = [
        'Development Status :: 4 - Beta',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: BSD License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Framework :: Django',
        'Natural Language :: English',
        'Natural Language :: French',
        'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
        'Topic :: Internet :: WWW/HTTP :: WSGI :: Application',
    ],
)

