#!/usr/bin/env python
# -*- coding: utf-8 -*-

from setuptools import setup

with open('README.md') as readme_file:
    readme = readme_file.read()

requirements = [
    'docopt>=0.6.0',
    'phabricator>=0.7.0',
]

test_requirements = [
    # TODO: put package test requirements here
]

setup(
    name='dumph',
    version='0.20170126',
    description="Dump Phabricator tasks to a spreadsheet",
    long_description=readme,
    author="Emanuele Aina",
    author_email='emanuele.aina@collabora.com',
    url='https://github.com/em-/dumph',
    packages=[
        'dumph',
    ],
    scripts=['dumph'],
    include_package_data=True,
    install_requires=requirements,
    license="MIT license",
    zip_safe=False,
    keywords='phabricator',
    classifiers=[
        'Development Status :: 2 - Pre-Alpha',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Natural Language :: English',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
    ],
    test_suite='tests',
    tests_require=test_requirements
)
